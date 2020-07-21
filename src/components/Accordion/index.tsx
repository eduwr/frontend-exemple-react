import React, { useState } from 'react';
import {
  ListContainer,
  ListItem,
  Title,
  Text,
  Arrow,
  ItemHeader,
  ItemContent,
  Image,
} from './styles';
import { ImageInterface } from '../../data';
import arrowUp from '../../assets/icons/arrowUp.1x.png';
import arrowDown from '../../assets/icons/arrowDownWhite.1x.png';

interface Props {
  data: ImageInterface[];
}

export const Accordion: React.FC<Props> = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(0);

  const isSelected = (id: number): boolean => id === selectedItem;

  return (
    <ListContainer>
      {data.map((item) => {
        return (
          <ListItem
            key={item.id}
            selected={isSelected(item.id)}
            onClick={() => {
              isSelected(item.id)
                ? setSelectedItem(0)
                : setSelectedItem(item.id);
            }}
          >
            <ItemHeader>
              <Title selected={isSelected(item.id)}>
                {item.title[0].toUpperCase() +
                  item.title.substring(1).toLowerCase()}
              </Title>
              <Arrow src={selectedItem === item.id ? arrowUp : arrowDown} />
            </ItemHeader>
            <ItemContent selected={isSelected(item.id)}>
              <Image src={item.uri} selected={isSelected(item.id)} />
              <Text selected={isSelected(item.id)}>{item.description}</Text>
            </ItemContent>
          </ListItem>
        );
      })}
    </ListContainer>
  );
};
