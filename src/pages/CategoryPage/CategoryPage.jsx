import Header from '../../components/Header/Header';
import Row from '../../components/Row/Row';
import Footer from '../../components/Footer/Footer';

const CategoryPage = ({ title, fetchUrl }) => {
  return (
    <div className="categoryPage" style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#111" }}>
      <Header />
      <h1 style={{ marginLeft: "20px", marginBottom: "20px", color: "#fff" }}>{title}</h1>
      {fetchUrl && <Row title={title} fetchUrl={fetchUrl} isLargeRow />}
      <Footer />
    </div>
  );
};

export default CategoryPage;