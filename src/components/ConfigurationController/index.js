// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="con-container">
          <h1 className="con-head">Layout</h1>
          <div className="input-container">
            <input
              checked={showContent}
              onChange={onChangeContent}
              className="input"
              type="checkbox"
              id="input1"
              value={showContent}
            />
            <label className="label" htmlFor="input1">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
              className="input"
              type="checkbox"
              id="input2"
              value={showLeftNavbar}
            />
            <label className="label" htmlFor="input2">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
              className="input"
              type="checkbox"
              id="input3"
              value={showRightNavbar}
            />
            <label className="label" htmlFor="input3">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
