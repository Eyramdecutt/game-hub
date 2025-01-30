import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <List key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List>
      ))}
    </ul>
  );
};

export default GenreList;
