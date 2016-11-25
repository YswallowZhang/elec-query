const React = require('react');
const css = require('./index.css');

const arr = [{
    elec_start: '121',
    elec_end: '2121',
    elec_free: '12',
    elec_spend: '120',
    elec_month: '05'
}, {
    elec_start: '121',
    elec_end: '2121',
    elec_free: '12',
    elec_spend: '233',
    elec_month: '06'
}, {
    elec_start: '121',
    elec_end: '2121',
    elec_free: '12',
    elec_spend: '110',
    elec_month: '07'
}, {
    elec_start: '121',
    elec_end: '2121',
    elec_free: '12',
    elec_spend: '44',
    elec_month: '08'
}, {
    elec_start: '121',
    elec_end: '2121',
    elec_free: '12',
    elec_spend: '200',
    elec_month: '09'
}, {
    elec_start: '121',
    elec_end: '2121',
    elec_free: '12',
    elec_spend: '122',
    elec_month: '10'
}]
const huansuan = (val, fontSize) => {
    return val / 75 * fontSize;
};

const fontSize = parseFloat(document.documentElement.style.fontSize);
const percent = 250  / 233;
const lineArr = arr.map(function (item, index) {
    var x;
    if(index == 0) {
        x = 115;               
    } else {
        x = 115 + index * 105;
    }
    return {
        y: 336 - item.elec_spend * percent,
        x: x
    }
})

const Line = React.createClass({
    
    componentDidMount() {
        const newlineArr = Array.from(lineArr);
        newlineArr.unshift({y: 336, x: 45});
        newlineArr.push({y: 336, x: 705});  
        const len = newlineArr.length;

        const canvas = this.refs.myCanvas;
        const ctx = canvas.getContext("2d");
        ctx.lineWidth = window.lib.flexible.rem2px(4 / 75); 
        ctx.strokeStyle = '#ebfaf7';
        ctx.lineCap="round";

        newlineArr.forEach(function (item, index) {
            if(index == len - 1) return;

            ctx.moveTo(huansuan(item.x, fontSize), huansuan(item.y, fontSize));
            ctx.lineTo(huansuan(newlineArr[index + 1].x, fontSize), huansuan(newlineArr[index + 1].y, fontSize))
        })

        //最高y=80 最低y=336 最左x=45 最右x=705 半径r=3        
        ctx.stroke(); 
    },
    render () {
        return <div className='line-box'>
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
                lineArr.map(function(item, index) {
                    const style = {}
                    if (index === this.props.focus) {
                        style.width = 22 / 75 + 'rem';
                        style.height = 22 / 75 + 'rem';
                        style.backgroundColor = '#fff391';
                        style.left = (item.x - 11) / 75 + 'rem';
                        style.top = (item.y + 72) / 75 + 'rem';
                    }
                    return <div className='dot' key={index} style={Object.assign({
                        top: (item.y + 76) / 75 + 'rem', 
                        left: (item.x - 6) / 75 + 'rem',                        
                    }, style)}></div>
                }.bind(this))
            }
            <div className='alignment' style={{
                top: (lineArr[this.props.focus].y + 84) / 75 + 'rem', 
                left: (lineArr[this.props.focus].x) / 75 + 'rem', 
                height: (340 - lineArr[this.props.focus].y) / 75 + 'rem'
            }}></div>

            <ul className='much' onClick={this.props.handleClick}>
                {
                    arr.map(function(item, index) {
                        const style = {};
                        if (index === this.props.focus)
                            style.color = '#fff391'
                        return <li 
                            className='much-list' 
                            key={index} 
                            style={style}
                            data-index={index}
                        >{item.elec_month}</li>
                    }.bind(this))
                }

                <li className='triangle' style={{
                    left: (29 + this.props.focus * 105) / 75 + 'rem'
                }}></li>
            </ul>
        </div>
    }
})
module.exports = Line;