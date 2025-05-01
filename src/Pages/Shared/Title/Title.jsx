import PropTypes from "prop-types";

const Title = ({firstLetter, title}) => {
    return (
        <div className="text-2xl font-robotoSlab mb-5 font-semibold border-b border-gray-400 pb-3 text-gray-700">
            <span className="text-primary">{firstLetter}</span>{title}
        </div>
    );
};

export default Title;
Title.propTypes = {
    firstLetter: PropTypes.string,
    title: PropTypes.string
}