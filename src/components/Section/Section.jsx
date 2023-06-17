import PropTypes from 'prop-types';

export default function Section({ children, title }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};
