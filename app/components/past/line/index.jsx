const React = require('react');
const css = require('./index.css');

const arr = [120, 200, 80, 140, 50, 80];

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


console.log(lineArr[0].y)
const Line = React.createClass({
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
            <div style={{width:'8px', height:'8px', backgroundColor:'red',borderRadius:'100%', position:'absolute', top:huansuan(lineArr[0].y + 76, fontSize) + 'px', left:huansuan(lineArr[0].x - 8, fontSize) + 'px'}}>

            </div>
             <div style={{width:'8px', height:'8px', backgroundColor:'red',borderRadius:'100%', position:'absolute', top:huansuan(lineArr[1].y + 76, fontSize) + 'px', left:huansuan(lineArr[1].x - 8, fontSize) + 'px'}}>

            </div>
             <div style={{width:'8px', height:'8px', backgroundColor:'red',borderRadius:'100%', position:'absolute', top:huansuan(lineArr[2].y + 76, fontSize) + 'px', left:huansuan(lineArr[2].x - 8, fontSize) + 'px'}}>

            </div>
             <div style={{width:'8px', height:'8px', backgroundColor:'red',borderRadius:'100%', position:'absolute', top:huansuan(lineArr[3].y + 76, fontSize) + 'px', left:huansuan(lineArr[3].x - 8, fontSize) + 'px'}}>

            </div>
             <div style={{width:'8px', height:'8px', backgroundColor:'red',borderRadius:'100%', position:'absolute', top:huansuan(lineArr[4].y + 76, fontSize) + 'px', left:huansuan(lineArr[4].x - 8, fontSize) + 'px'}}>

            </div>
             <div style={{width:'8px', height:'8px', backgroundColor:'red',borderRadius:'100%', position:'absolute', top:huansuan(lineArr[5].y + 76, fontSize) + 'px', left:huansuan(lineArr[5].x - 8, fontSize) + 'px'}}>

            </div>
            <ul className='much'>
                <li className='much-list'>01</li>
                <li className='much-list'>02</li>
                <li className='much-list'>03</li>
                <li className='much-list'>04</li>
                <li className='much-list'>05</li>
                <li className='much-list'>06</li>
                <li className='triangle'></li>
            </ul>
        </div>
    }
})
module.exports = Line;