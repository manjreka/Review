import {Component} from 'react'
import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class ReviewsCarousel extends Component {
  state = {activeId: reviewsList[0], count: 0}

  clickLeftButton = () => {
    const {count} = this.state
    if (count > 0 && count < 4) {
      this.setState(prevState => ({count: prevState.count - 1}))
      this.setState({activeId: reviewsList[count]})
      console.log(count)
    }

    if (count === 4) {
      this.setState({activeId: reviewsList[2], count: 2})
    }

    if (count === 0) {
      this.setState({activeId: reviewsList[0], count: 0})
    }
  }

  clickRightButton = () => {
    console.log('button clicked')
    const {count} = this.state
    console.log(count)
    if (count < 4) {
      this.setState(prevState => ({count: prevState.count + 1}))
      this.setState({activeId: reviewsList[count]})
    }
  }

  render() {
    const {activeId} = this.state
    const {imgUrl, username, companyName, description} = activeId
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="container">
          <button
            type="button"
            className="button"
            onClick={this.clickLeftButton}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="sub-container">
            <img src={imgUrl} alt={username} />
            <p>{username}</p>
            <p> {companyName} </p>
            <p> {description} </p>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.clickRightButton}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
