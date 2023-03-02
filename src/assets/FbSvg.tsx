interface Props extends React.InputHTMLAttributes<SVGSVGElement> {
  small: boolean;
}

const FbSvg = (props: Props) => {
  const { small } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={small ? 30 : 60}
      height={small ? 30 : 60}
      viewBox="0 0 24 24"
      {...props}
      fill="#3B5998"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3z" />
    </svg>
  );
};

export default FbSvg;
