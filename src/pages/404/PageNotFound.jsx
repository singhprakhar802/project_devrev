import "./style.css";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
        <span className="smallText">:(</span>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
