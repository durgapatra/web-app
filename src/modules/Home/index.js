import React from "react";
import ContainerLayout from "globals/components/ContainerLayout";
import { Carousel } from "antd";
import "./home.style.scss";
class Home extends React.Component {
  render() {
    return (
      <ContainerLayout>
        <div className="home">
          <h2>મહેસાણા ૪૨ ગોળ પ્રજાપતિ સમાજ આપનું હાર્દિક સ્વાગત કરે છે</h2>
          <Carousel autoplay>
            <div>
              <img alt="img-1" src="https://picsum.photos/id/1/500/300" />
            </div>
            <div>
              <img alt="img-1" src="https://picsum.photos/id/3/500/300" />
            </div>
            <div>
              <img alt="img-1" src="https://picsum.photos/id/6/500/300" />
            </div>
            <div>
              <img alt="img-1" src="https://picsum.photos/id/5/500/300" />
            </div>
          </Carousel>
          <div className="home-contain">
            <p>
              પ્રત્યેક વ્યક્તિ પોતાના સમાજનો એક ઘટક છે અને વ્યક્તિનો વિકાસ તેના
              સામાજિક રીત – રીવાજો અને સમાજની જીવન-શૈલી પર આધારિત છે. આ સાથે જ
              સમાજનો વિકાસ તેના ઘટક સમી વ્યક્તિની શૈક્ષણિક પ્રતિભા અને તેના
              પરિવારની સમૃદ્ધિ ઉપર આધારિત છે.
            </p>

            <p>
              સમાજમાં શિક્ષણનું સ્તર જેટલું ઊંચું અને સમાજ પ્રત્યેની વ્યક્તિની
              સમાજભાવના તથા સહકાર-ભાવના જેટલી ઉંચી એટલી સમાજની પ્રતિભા ઉજળી
              દેખાવાની. સમાજના નીતિ – નિયમો અને રીત – રીવાજો ઉપર વ્યક્તિની જેટલી
              વધારે આદર – ભાવના તેટલો જ સમાજ વધારે સંગઠિત અને શિસ્તબદ્ધ બની શકે
              છે.
            </p>
            <p>
              સમાજમાં શિક્ષણનું સ્તર જેટલું ઊંચું અને સમાજ પ્રત્યેની વ્યક્તિની
              સમાજભાવના તથા સહકાર-ભાવના જેટલી ઉંચી એટલી સમાજની પ્રતિભા ઉજળી
              દેખાવાની. સમાજના નીતિ – નિયમો અને રીત – રીવાજો ઉપર વ્યક્તિની જેટલી
              વધારે આદર – ભાવના તેટલો જ સમાજ વધારે સંગઠિત અને શિસ્તબદ્ધ બની શકે
              છે.
            </p>
          </div>
        </div>
      </ContainerLayout>
    );
  }
}

export default Home;
