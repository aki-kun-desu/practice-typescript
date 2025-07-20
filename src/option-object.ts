type Option = Partial<{ x: number; y: number; z: number }>;
export const optionObj = ({ x = 0, y, z }: Option = {}) => {
    console.log(x, y, z);
};
