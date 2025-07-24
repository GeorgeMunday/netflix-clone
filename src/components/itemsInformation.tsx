// ItemInformation.tsx
import React from 'react';
import { type DataTypes } from '../modules/types_files';
import { InfoWrapper } from '../styles/Information.modules';


interface ItemInformationProps {
  item: DataTypes;
}



const ItemInformation: React.FC<ItemInformationProps> = () => {
  return (
    <InfoWrapper>
      hello
    </InfoWrapper>
  );
};

export default ItemInformation;
