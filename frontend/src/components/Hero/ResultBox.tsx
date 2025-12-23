interface Props {
  result: string;
}

const ResultBox = ({ result }: Props) => {
  if (!result) return null;

  return (
    <div className="mt-8 p-6 bg-gray-50 border rounded-lg whitespace-pre-line">
      <h3 className="text-lg font-semibold mb-3">Your Improved Prompt:</h3>
      <hr className="my-4" />
      <p className="text-gray-800">{result}</p>
    </div>
  );
};

export default ResultBox;
