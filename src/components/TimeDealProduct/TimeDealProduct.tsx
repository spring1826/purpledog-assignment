import Image from "next/image";
import { useCountDownTimer } from "@/hooks/useCountDownTimer";
import { SaleWineType } from "@/models/home";
import { Typo } from "../Typo/Typo";
import TimerIcon from "@/assets/icon/timer.svg";
import * as S from "./TimeDealProduct.style";

interface TimeDealProductProps {
  wine: SaleWineType;
}

export const TimeDealProduct: React.FC<TimeDealProductProps> = (props) => {
  const countDownTime = useCountDownTimer(props.wine.timeSaleEndDate);

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
          <div>
            <Typo className="time-box" fontSize="M_10PX" color="white">
              <Image src={TimerIcon} />
              {countDownTime}
            </Typo>
          </div>
        </S.WineContentContainer>
      </S.Wrapper>
    );
  } else {
    return null;
  }
};
