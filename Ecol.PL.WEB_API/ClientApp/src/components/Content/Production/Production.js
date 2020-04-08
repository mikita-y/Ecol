import React from 'react';
import "./Production.css"

export default class Production extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
        return (
            <div className="production">
                <h3>Кабельная система &#171;ЭКОЛЬ&#187;</h3>
                {/*<table>
                    <tbody>
                        <tr>
                            <td><a href="/product/kabelnaya-sistema-ekol/ekol-kusil.aspx">ЭКОЛЬ КУСИЛ</a></td>
                            <td>Кабели универсальные силовые с изоляцией и оболочкой из полимерных композиций</td>
                        </tr>
                        <tr>
                            <td><a href="/product/kabelnaya-sistema-ekol/ekol-kuin.aspx">ЭКОЛЬ КУИН</a></td>
                            <td>Кабели универсальные инструментальные для межприборного монтажа</td>
                        </tr>
                        <tr>
                            <td><a href="/product/kabelnaya-sistema-ekol/ekol-kpm.aspx">ЭКОЛЬ КПМ</a></td>
                            <td>Кабели монтажные для систем промышленной автоматики</td>
                        </tr>
                        <tr>
                            <td><a href="/product/kabelnaya-sistema-ekol/ekol-kmel.aspx">ЭКОЛЬ КМЭЛ</a></td>
                            <td>Кабели монтажные электрические с изоляцией и оболочкой из полимерных материалов</td>
                        </tr>
                        <tr>
                            <td><a href="/product/kabelnaya-sistema-ekol/ekol-kv.aspx">ЭКОЛЬ-КВ</a></td>
                            <td>Кабели универсальные экранированные для промышленных сетей</td>
                        </tr>
                        <tr>
                            <td><a href="/product/kabelnaya-sistema-ekol/ekol-kvip.aspx">ЭКОЛЬ КВИП</a></td>
                            <td>Кабели парной скрутки с изоляцией из сшитого полиолефина</td>
                        </tr>
                        <tr>
                            <td><a href="/product/kabelnaya-sistema-ekol/mkeshv.aspx">МКЭШВ</a></td>
                            <td>Кабели монтажные парной скрутки, с полимерной изоляцией и оболочкой</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Все провода и кабели</h3>
                <table>
                    <tbody>
                        <tr>
                            <td> <a href="/product/vse-provoda-i-kabeli/kvip.aspx">КВИП</a></td>
                            <td>Кабели парной скрутки с изоляцией из сшитого полиолефина</td>
                        </tr>
                        <tr>
                            <td ><a href="/product/vse-provoda-i-kabeli/kabeli-universalnye-dlya-mejpribornogo-montaja.aspx">Кабели универсальные для межприборного монтажа</a></td>
                            <td>Кабели универсальные для межприборного монтажа и передачи данных</td>
                        </tr>
                        <tr>
                            <td><a href="/product/vse-provoda-i-kabeli/kuin.aspx">КУИН</a></td>
                            <td>Кабели универсальные инструментальные</td>
                        </tr>
                        <tr>
                            <td><a href="/product/vse-provoda-i-kabeli/vvg.aspx">ВВГ</a></td>
                            <td>Кабели силовые с пластмассовой изоляцией ВВГ ГОСТ 31996-2012</td>
                        </tr>
                        <tr>
                            <td class="productNameCell"><a href="/product/vse-provoda-i-kabeli/kvvg-kvvge.aspx">КВВГ, КВВГЭ</a></td>
                            <td>Монтажные контрольные КВВГ, КВВГЭ ГОСТ 1508-78</td>
                        </tr>
                        <tr>
                            <td><a href="/product/vse-provoda-i-kabeli/mkshv-mkkshv-mkeshv-mkekshv.aspx">МКШВ, МККШВ, МКЭШВ, МКЭКШВ</a></td>
                            <td>Кабели монтажные парной скрутки, с полимерной изоляцией и оболочкой для стационарной прокладки МКШВ, МККШВ, МКЭШВ, МКЭКШВ ТУ 3581-006-76960731-2006</td>
                        </tr>
                        <tr>
                            <td class="productNameCell"><a href="/product/vse-provoda-i-kabeli/gerda-kv.aspx">ГЕРДА-КВ</a></td>
                            <td>Кабели монтажные парной скрутки, экранированные ГЕРДА-КВ</td>
                        </tr>
                        <tr>
                            <td class="productNameCell"><a href="/product/vse-provoda-i-kabeli/kmel.aspx">КМЭЛ</a></td>
                            <td>Кабели монтажные электрические</td>
                        </tr>
                        <tr>
                            <td class="productNameCell"><a href="/product/vse-provoda-i-kabeli/mkpsv-tu-3500-1776960731-2011.aspx">МКПсВ ТУ 3500-1776960731-2011</a></td>
                            <td>Кабели монтажные с изоляцией и оболочкой из самозатухающих полимерных композиций МКПсВ ТУ 3581-017-76960731-2011</td>
                        </tr>
                        <tr>
                            <td class="productNameCell"><a href="/product/vse-provoda-i-kabeli/mkpsv-tu-by-490496942007-2014.aspx">МКПсВ ТУ BY 490496942.007-2014</a></td>
                            <td>Кабели монтажные с изоляцией и оболочкой из самозатухающих полимерных композиций МКПсВ ТУ BY 490496942.007-2014</td>
                        </tr>
                        <tr>
                            <td><a href="/product/vse-provoda-i-kabeli/mksh-mkesh-mkshm.aspx">МКШ, МКЭШ, МКШМ</a></td>
                            <td>Монтажные многожильные кабели марки МКШ, МКЭШ, МКШМ ГОСТ 10348-80</td>
                        </tr>
                        <tr>
                            <td class="productNameCell"><a href="/product/vse-provoda-i-kabeli/kabeli-universalnye-instrumentalnye-kupd.aspx">Кабели универсальные инструментальные КУПД</a></td>
                            <td>Кабели универсальные инструментальные КУПД ТУ BY 490496942.010-2015</td>
                        </tr>
                        
                    </tbody>
                </table>

                <h3>Оборудование слива-налива</h3>
                
                */}
            </div>
        )
    }
}




function table3() {
    return(
        <div>
            <a href="/product/oborudovanie-sliva-naliva/stoyaki-verhnego-naliva.aspx">Стояки верхнего налива</a>
            <a href="/product/oborudovanie-sliva-naliva/mostik-perehodnoi.aspx">Мостик переходной</a>
            <a href="/product/oborudovanie-sliva-naliva/stoyaki-nijnego-sliva.aspx">Стояки нижнего слива</a>
        </div>
    )
}
