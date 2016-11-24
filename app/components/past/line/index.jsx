const React = require('react');
const css = require('./index.css');

const arr = [120, 200, 80, 140, 50, 80];
const arrMonth = ['05', '06', '07', '08', '09', '10'];
const huansuan = (val, fontSize) => {
    return val / 75 * fontSize;
};

const fontSize = parseFloat(document.documentElement.style.fontSize);
const percent = 250  / Math.max(...arr);
const lineArr = arr.map(function (item, index) {
    var x;
    if(index == 0) {
        x = 115;               
    } else {
        x = 115 + index * 105;
    }
    return {
        y: 336 - item * percent,
        x: x
    }
})

var last = null;
const Line = React.createClass({
    handle(event) {
        var target = event.target;
        target.style.color = '#fff391';
        console.log(target)
        this.refs.triangle.style.left = 29 + target.key * 105 + 'px'
    },

    componentDidMount() {

        lineArr.unshift({y: 336, x: 45});
        lineArr.push({y: 336, x: 705});  
        const len = lineArr.length;


        var canvas = this.refs.myCanvas;
        var ctx = canvas.getContext("2d");
        ctx.lineWidth = window.lib.flexible.rem2px(4 / 75); 
        ctx.strokeStyle = '#ebfaf7';

        lineArr.forEach(function (item, index) {
            if(index == len - 1) return;

            ctx.moveTo(huansuan(item.x, fontSize), huansuan(item.y, fontSize));
            ctx.lineTo(huansuan(lineArr[index + 1].x, fontSize), huansuan(lineArr[index + 1].y, fontSize))
        })

        //最高y=80 最低y=336 最左x=45 最右x=705 半径r=3        
        ctx.stroke(); 
    },
    render () {
        return <div className='content'>
            <div className='top'>
                ［当前仅可查询前六个月的电量与电费］
            </div>
            <canvas 
                ref='myCanvas' 
                width={window.innerWidth + 'px'} 
                height={window.lib.flexible.rem2px(422 / 75) + 'px'} 
                className='myCanvas'>
            </canvas>
            {   
                arr.forEach(function() {
                    return <div className='dot'></div>
                })
            }
            <ul className='much' onClick={this.handle}>
                {
                    arrMonth.forEach(function(item, index) {
                        return <li className='much-list' key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    }
})
module.exports = Line;