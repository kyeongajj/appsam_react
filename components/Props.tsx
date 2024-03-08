const Mother = () => {
  return (
    <div>
      This is Mother Component
      {/*NOTE: type을 지정한 경우 타입에 따라 자동으로 에러를 보여준다 */}
      <Child text={'text'} number={123} />
    </div>
  );
};

const Child = ({ text, number }: { text: string; number: number }) => {
  return (
    <div>
      this is Child Components text is {text} and number is {number}
    </div>
  );
};

export default Mother;
