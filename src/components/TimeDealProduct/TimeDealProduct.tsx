import { SaleWineType } from "@/models/home";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { Typo } from "../Typo/Typo";
import * as S from "./TimeDealProduct.style";

interface TimeDealProductProps {
  wine: SaleWineType;
}

export const TimeDealProduct: React.FC<TimeDealProductProps> = (props) => {
  const [remainTime, setRemainTime] = useState<string>("start");

  // TODO: hook으로 분리
  const CountDownTimer = (endDate: string) => {
    console.log("000");
    let end: any = new Date(endDate);
    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer: any;

    const showRemaining = () => {
      console.log("111");
      let now: any = new Date();
      let distance = end - now;

      if (distance < 0) {
        clearInterval(timer);
        setRemainTime("");
        return;
      }
      let days = Math.floor(distance / _day);
      let hours = Math.floor((distance % _day) / _hour);
      let minutes = Math.floor((distance % _hour) / _minute);
      let seconds = Math.floor((distance % _minute) / _second);
      setRemainTime(`${hours}:${minutes}:${seconds} 남음`);
      console.log(`${hours}:${minutes}:${seconds} 남음`);
    };

    timer = setInterval(showRemaining, 1000);
    console.log("timer", timer);
  };

  useEffect(() => {
    CountDownTimer(props.wine.timeSaleEndDate);
    // return () => CountDownTimer(props.wine.timeSaleEndDate);
  }, []);

  if (new Date(props.wine.timeSaleEndDate) > new Date()) {
    return (
      <S.Wrapper>
        <S.WineThumbnailContainer>
          <Image
            src={props.wine.thumbnailImageUrl}
            width={"100%"}
            height={"100%"}
          />
        </S.WineThumbnailContainer>
        <S.WineContentContainer>
          <div>
            <Typo
              fontSize="M_11PX"
              color="gray_3"
            >{`${props.wine.countryName} · ${props.wine.styleNames}`}</Typo>
          </div>
          <div>
            <Typo fontSize="M_13PX">{props.wine.wineryName}</Typo>
          </div>
          <div>
            <Typo
              fontSize="M_16PX"
              weight={700}
            >{`${props.wine.discountPrice.toLocaleString()}원`}</Typo>
          </div>
          <div>
            <Typo
              fontSize="M_12PX"
              color="red"
            >{`${props.wine.discountPercent}%`}</Typo>
            <Typo
              className="wine-price"
              fontSize="M_12PX"
              color="gray_3"
            >{`${props.wine.salesPrice.toLocaleString()}원`}</Typo>
          </div>
          <div className="time-box">
            <Typo fontSize="M_10PX" color="white">
              {remainTime}
            </Typo>
          </div>
        </S.WineContentContainer>
      </S.Wrapper>
    );
  } else {
    return null;
  }
};
