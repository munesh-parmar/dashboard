import { iconsImgs } from "../../utils/images"

const Financial = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c8">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Financial Advice</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c8-content">
            <p className="text text-silver-v1"> Start by tracking your income and expenses. Creating a budget will give you a clear picture of where your money is going and help you identify areas where you can save.</p>
        </div>
    </div>
  )
}

export default Financial
