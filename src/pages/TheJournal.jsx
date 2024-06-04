//react
import { useNavigate } from 'react-router-dom';
//images
import PropTypes from 'prop-types';
import Flowers from '../assets/images/plant_2_optimized.gif';
import Succulents from '../assets/images/plant_1_optimized.gif';

const TheJournal = ({ showParagraphs ,backgroundColor }) => {
    const navigate = useNavigate();

    const handleReadMore = (path) => {
      navigate(path);
    };
  return (
    <section className="journal-section" style={{ backgroundColor: backgroundColor }}>
      <h2>The Journal</h2>
      <div className="articles">
        <div className="article">
          <img src={Flowers} alt="Flowers" />
          <h3>Is It Flowers You’re After?</h3>
          {showParagraphs && <p>Flowering plants are stunning, but require a bit more work than their non-flowering brethren. Learn how to keep them happy.</p>}
          <button onClick={() => handleReadMore('/journal/journalFlowerOne')}>Read More</button>
        </div>
        <div className="article">
          <img src={Succulents} alt="Succulents" />
          <h3>Searching for Succulents?</h3>
          {showParagraphs && <p>If you have a sunny windowsill, you can be a succulent owner. These hardy and beautiful plants are as easy as they come.</p>}
          <button onClick={() => handleReadMore('/journal/journalFlowerTwo')}>Read More</button>
        </div>
      </div>
    </section>
  );
};

TheJournal.propTypes = {
  showParagraphs: PropTypes.bool,
  backgroundColor: '#a8a6a0'
};

TheJournal.defaultProps = {
  showParagraphs: true,
  backgroundColor: '#38383b'
};

export default TheJournal;
