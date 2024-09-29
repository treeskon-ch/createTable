interface Props {
  title: string;
}

const SearchForm = ({ title }: Props) => {
  return (
    <>
      <div>
        <p style={{ marginBottom: "30px" }}>{title}</p>
        <div
          style={{
            justifyContent: "end",
            alignItems: "center",
            display: "flex",
            marginBottom: "10px",
          }}
        >
          <span style={{ marginRight: "8px" }}>Search:</span>
          <input style={{ height: "24px", border: "1px solid #00000033" }} />
        </div>
      </div>
    </>
  );
};

export default SearchForm;
