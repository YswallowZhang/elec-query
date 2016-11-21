
const React = require('react');
const css = require('./index.css');


const Attention = React.createClass({

    render() {
        return <div className='attention-box'>
            <span className='attention-title'>注意事项</span>
            <li className='attention-list'><img src={require('./images/lightning.png')} className='attention-pic' /><span className='attention-word'>本服务支持当月查询，不不支持跨越查询本服务支持当月查询，不不支持跨越查询</span></li>
            <li className='attention-list'><img src={require('./images/lightning.png')} className='attention-pic' /><span className='attention-word'>数据为抄表时间数据，或与电表实时查询数据不一致</span></li>
            <li className='attention-list'><img src={require('./images/lightning.png')} className='attention-pic' /><span className='attention-word'>用电过程中如需查询，请致电</span><span className='telephone'>023-62487902</span></li>
        </div>
    }
})     

module.exports = Attention;