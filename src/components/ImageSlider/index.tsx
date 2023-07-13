import { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";
import { CarImage, CarImageWrapper, Container, ImageIndex, ImageIndexes } from "./styles";

interface ImageSliderProps {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  const [viewableItems, setViewableItems] = useState("");

  const indexChanged = useRef((info: { viewableItems: ViewToken[]; changed: ViewToken[]; }) => {
    setViewableItems(info.viewableItems[0].key)
  })

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((img, index) => (
          <ImageIndex key={img} active={img == viewableItems} />
        ))}
      </ImageIndexes>
      <FlatList
        data={imagesUrl}
        keyExtractor={key => key}
        renderItem={({ item }) =>
          <CarImageWrapper>
            <CarImage
              source={{ uri: item }}
              resizeMode="contain"
            />
          </CarImageWrapper>
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  )
}