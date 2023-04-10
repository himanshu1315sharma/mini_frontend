import { Add, Height, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useState } from "react";
const Container = styled.div``;


const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

//const [des, setDis] = useState([]);


 export const Product1 = () => {
  const [img1, setImg1] = useState("https://i.postimg.cc/Jn5YhPvx/1.jpg");

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src= {img1} style={{ "height": "600px", "width": "500px",  "background-position": "center", "object-fit": "contain" }} />
        </ImgContainer>
        <InfoContainer>
          <Title style={{"font-size":"36px"}}>PUMA</Title>
          <Desc style={{"line-height": "32px","font-size":"22px"}}>
          Puma SE, branded as PUMA, is a German multinational corporation that designs and manufactures athletic and casual footwear, apparel and accessories, which is headquartered in Herzogenaurach, Bavaria, Germany. Puma is the third largest sportswear manufacturer in the world.[5] The company was founded in 1948 by Rudolf Dassler (1898–1974). In 1924, Rudolf and his brother Adolf  Dassler had jointly formed the company Gebrüder Dassler Schuhfabrik ('Dassler Brothers Shoe Factory'. The relationship between the two brothers deteriorated until they agreed to split in 1948, forming two separate entities, Adidas and Puma.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Clothes</FilterTitle>
              <Image onClick={() => setImg1("https://i.postimg.cc/fTHvrWmD/1.jpg")} src="https://i.postimg.cc/7YzQdxPS/1.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg1("https://i.postimg.cc/NFDxYBn8/2.jpg")} src="https://i.postimg.cc/dVmNQ4y1/2.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg1("https://i.postimg.cc/6pgfBHMP/3.jpg")} src="https://i.postimg.cc/N0dNmFbv/3.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg1("https://i.postimg.cc/Jn5YhPvx/1.jpg")} src="https://i.postimg.cc/kMH7wCHb/25.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              

            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          

        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
             /* onClick={() => setImg2("https://i.postimg.cc/vBd7V4FL/4.jpg")}
              onClick={() => setImg2("https://i.postimg.cc/bwsRcX9b/5.jpg")}
              onClick={() => setImg2("https://i.postimg.cc/s2W9xp8g/6.jpg")}
              
                <Image onClick={() => setImg3("https://i.postimg.cc/mkm7JVc8/7.jpg")} src="https://i.postimg.cc/7YzQdxPS/1.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg3("https://i.postimg.cc/TwqVqTT8/8.jpg")} src="https://i.postimg.cc/dVmNQ4y1/2.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg3("https://i.postimg.cc/nrFv3NLX/9.jpg")} src="https://i.postimg.cc/N0dNmFbv/3.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              
              

              */
export const Product2 = () => {
  const [img2, setImg2] = useState("https://i.postimg.cc/d3QHZGKY/2.jpg");
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src= {img2} style={{ "height": "600px", "width": "500px",  "background-position": "center", "object-fit": "contain" }} />
        </ImgContainer>
        <InfoContainer>
          <Title style={{"font-size":"36px"}}>US POLO</Title>
          <Desc style={{"line-height": "32px","font-size":"22px"}}>
          U.S. Polo Assn. is the official brand of the United States Polo Association (USPA), the nonprofit governing body for the sport of polo in the United States. With worldwide distribution through over 1,030 mono-branded stores, boutiques, department stores and e-commerce, U.S. Polo Assn. offers apparel for the whole family as well as accessories, footwear, travel and home goods in more than 160 countries..
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Clothes</FilterTitle>
              <Image onClick={() => setImg2("https://i.postimg.cc/vBd7V4FL/4.jpg")} src="https://i.postimg.cc/xjJsN0zB/4.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg2("https://i.postimg.cc/bwsRcX9b/5.jpg")} src="https://i.postimg.cc/SQBgWwLR/5.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg2("https://i.postimg.cc/s2W9xp8g/6.jpg")}src="https://i.postimg.cc/NMVpCnWN/6.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg2("https://i.postimg.cc/d3QHZGKY/2.jpg")}src="https://i.postimg.cc/FsJNBqtn/26.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              

            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

 export const Product3 = () => {
  const [img3, setImg3] = useState("https://i.postimg.cc/gc4BFtvk/3.jpg");
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={img3} style={{ "height": "600px", "width": "500px",  "background-position": "center", "object-fit": "contain" }} />
        </ImgContainer>
        <InfoContainer>
          <Title style={{"font-size":"36px"}}>HRX</Title>
          <Desc style={{"line-height": "32px","font-size":"22px"}}>
          The name represents the X-factor, signifying one to push oneself towards the path of excellence to achieve the best outcome possible. An example of a successful Make in India story, HRX aims to revolutionise the fitness scenario in India, as a value-for-money, high quality alternative to international brands. The brand offers a range of products including sports shoes, mens joggers, t-shirts, backpacks and select womenswear (joggers, sports bras, t-shirts). Product categories across HRX Active Wear, HRX Casual and HRX Yoga and are available on e-commerce platforms including Myntra, Flipkart and Jabong.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Clothes</FilterTitle>
              <Image onClick={() => setImg3("https://i.postimg.cc/mkm7JVc8/7.jpg")} src="https://i.postimg.cc/B6tmg3wL/7.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg3("https://i.postimg.cc/TwqVqTT8/8.jpg")} src="https://i.postimg.cc/G3V5XBRc/8.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg3("https://i.postimg.cc/nrFv3NLX/9.jpg")} src="https://i.postimg.cc/L6jNvNvT/9.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg3("https://i.postimg.cc/gc4BFtvk/3.jpg")} src="https://i.postimg.cc/xC4VsG62/27.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
                
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export const Product4 = () => {
  const [img4, setImg4] = useState("https://i.postimg.cc/PrR3NL3g/4.jpg");
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={img4} style={{ "height": "600px", "width": "500px",  "background-position": "center", "object-fit": "contain" }} />
        </ImgContainer>
        <InfoContainer>
          <Title style={{"font-size":"36px"}}>NIKE</Title>
          <Desc style={{"line-height": "32px","font-size":"22px"}}>
          The world’s largest athletic apparel company, Nike is best known for its footwear, apparel, and equipment. Founded in 1964 as Blue Ribbon Sports, the company became Nike in 1971 after the Greek goddess of victory. One of the most valuable brands among sport businesses, Nike employs over 76,000 people worldwide. It sells its apparel through the Nike brand, as well as its Jordan Brand and Converse subsidiaries. The company sponsors top athletes and sports teams around the world, including LeBron James, Serena Williams, Rafael Nadal, and Alex Morgan. In 2021 the company announced plans to begin refurbishing returned sneakers to sell at a lower price as part of an attempt to reduce consumer waste and combat climate change.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Clothes</FilterTitle>
              <Image onClick={() => setImg4("https://i.postimg.cc/G3KP43MG/10.jpg")} src="https://i.postimg.cc/MGQr5K0T/10.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg4("https://i.postimg.cc/TYPVg8SS/11.jpg")} src="https://i.postimg.cc/zGMcTRg6/11.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg4("https://i.postimg.cc/CL6j4PpK/12.jpg")} src="https://i.postimg.cc/j2Z82WT8/12.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg4("https://i.postimg.cc/PrR3NL3g/4.jpg")} src="https://i.postimg.cc/NMMw7C7D/28.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              

            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export const Product5 = () => {
  const [img5, setImg5] = useState("https://i.postimg.cc/sDS2nLQ1/5.jpg");

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={img5} style={{ "height": "600px", "width": "500px",  "background-position": "center", "object-fit": "contain" }} />
        </ImgContainer>
        <InfoContainer>
          <Title style={{"font-size":"36px"}}>ADIDAS</Title>
          <Desc style={{"line-height": "32px","font-size":"22px"}}>
          adidas AG (adidas) designs, manufactures and markets athletic and sports lifestyle products. The companys product portfolio includes footwear, apparel and accessories such as bags, sun glasses, fitness equipment, and balls. The company distributes and sells products through own-branded stores, retail stores, wholesale stores, sporting goods chains, buying groups, department stores, lifestyle retail chains, e-tailers, and franchise stores. It also markets products through e-commerce platform and mobile shopping apps. The company offers its products under the adidas brand. It also undertakes various product franchises. The company's business operations span across the Americas, Europe, Asia-Pacific, Africa and the Middle East. adidas is headquartered in Herzogenaurach, Germany.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Clothes</FilterTitle>
              
              <Image onClick={() => setImg5("https://i.postimg.cc/SxBCBnsF/13.jpg")} src="https://i.postimg.cc/bJ0VXCBf/13.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg5("https://i.postimg.cc/7LS0wqGC/14.jpg")} src="https://i.postimg.cc/7hxsq3FG/14.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} /> 
              <Image onClick={() => setImg5("https://i.postimg.cc/G2rYp6GX/15.jpg")} src="https://i.postimg.cc/MpxtLVF8/19.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg5("https://i.postimg.cc/sDS2nLQ1/5.jpg")} src="https://i.postimg.cc/0yYx8wyY/29.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              

            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export const Product6 = () => {
  const [img6, setImg6] = useState("https://i.postimg.cc/NfMCg848/6.jpg");

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={img6} style={{ "height": "600px", "width": "500px",  "background-position": "center", "object-fit": "contain" }} />
        </ImgContainer>
        <InfoContainer>
          <Title style={{"font-size":"36px"}}>PETER ENGLAND</Title>
          <Desc style={{"line-height": "32px","font-size":"22px"}}>
          Today, Peter England is the largest menswear brand in India with over 10 million garments in sales. the brand: The brand's vision is to become the most loved apparel brand of India offering clothes and accessories of unmatched value, to help young consumers realise their full potential.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Clothes</FilterTitle>
              <Image onClick={() => setImg6("https://i.postimg.cc/V6Rt04Fm/16.jpg")} src="https://i.postimg.cc/nVkS0Wmv/16.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg6("https://i.postimg.cc/GtmyFYMY/17.jpg")} src="https://i.postimg.cc/c4k9N8XC/17.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg6("https://i.postimg.cc/5yKFn0Gr/18.jpg")} src="https://i.postimg.cc/ZK57gLPX/18.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg6("https://i.postimg.cc/NfMCg848/6.jpg")} src="https://i.postimg.cc/Dz5TG3sm/30.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              

            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export const Product7 = () => {
  const [img7, setImg7] = useState("https://i.postimg.cc/d0M5mbKn/7.jpg");

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={img7} style={{ "height": "600px", "width": "500px",  "background-position": "center", "object-fit": "contain" }} />
        </ImgContainer>
        <InfoContainer>
          <Title style={{"font-size":"38px"}}>B&B</Title>
          <Desc style={{"line-height": "32px","font-size":"22px"}}>
          B&B designs, manufactures and markets athletic and sports lifestyle products. The companys product portfolio includes footwear, apparel and accessories such as bags, sun glasses, fitness equipment, and balls. The company distributes and sells products through own-branded stores, retail stores, wholesale stores, sporting goods chains, buying groups, department stores, lifestyle retail chains, e-tailers, and franchise stores. It also markets products through e-commerce platform and mobile shopping apps. The company offers its products under the adidas brand. It also undertakes various product franchises. The company's business operations span across the Americas, Europe, Asia-Pacific, Africa and the Middle East. B&B is headquartered in Herzogenaurach, Germany.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Clothes</FilterTitle>
              <Image onClick={() => setImg7("https://i.postimg.cc/bNdndxSf/19.jpg")} src="https://i.postimg.cc/MpxtLVF8/19.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg7("https://i.postimg.cc/KvVMT1tk/20.jpg")} src="https://i.postimg.cc/kgcwPG0R/20.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg7("https://i.postimg.cc/MGJfsgPz/21.jpg")} src="https://i.postimg.cc/g02szdpS/21.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg7("https://i.postimg.cc/d0M5mbKn/7.jpg")} src="https://i.postimg.cc/jjRTCSDG/31.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              

            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export const Product8 = () => {
  const [img8, setImg8] = useState("https://i.postimg.cc/bvQ36myP/8.jpg");

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={img8} style={{ "height": "600px", "width": "500px",  "background-position": "center", "object-fit": "contain" }} />
        </ImgContainer>
        <InfoContainer>
          <Title style={{"font-size":"38px"}}>Raymond</Title>
          <Desc style={{"line-height": "32px","font-size":"22px"}}>
          Raymond is a diversified group with majority business interests in Textile & Apparel sectors and a presence across varying segments such as Consumer Care, Realty and Engineering in national and international markets.Raymond Limited was first incorporated as the Raymond Woolen Mill in 1925 near Thane Creek. Lala Kailashpat Singhania took over The Raymond Woolen Mill in the year 1944. Ever since then they have been analogous with class, elegance and individuality which is evident in their women's fashion.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Clothes</FilterTitle>
              <Image onClick={() => setImg8("https://i.postimg.cc/bv0D4LWk/22.jpg")} src="https://i.postimg.cc/JhYqtg41/22.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg8("https://i.postimg.cc/zBJbNKYM/23.jpg")} src="https://i.postimg.cc/gJwKhDn3/23.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg8("https://i.postimg.cc/Y9b4C0pS/24.jpg")} src="https://i.postimg.cc/5yLq7250/24.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              <Image onClick={() => setImg8("https://i.postimg.cc/bvQ36myP/8.jpg")} src="https://i.postimg.cc/hvQWNJY7/32.jpg" style={{ "height": "50px", "width": "50px",  "background-position": "center", "object-fit": "contain","border-radius":"50%" }} />
              

            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};


//export default Product


