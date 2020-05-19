import React from 'react';

class ReadMoreAndLess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charLimit: 160
    };
    this.initialState = this.state;
  }

  getReadMoreContent() {
    const { charLimit } = this.state;
    const { children} = this.props;
    
    if (children.length > charLimit) {
      return (
        <span>
            {children.substr(0, charLimit)}...
            <span
            style={{ color: '#0062cc', cursor: 'pointer' }}
            role="presentation"
            onClick={this.showLongText.bind(this)}
            > More</span>
        </span>
      );
    } else if (children.length < charLimit) {
      return (
        <span>
            {children}
        </span>
      );
    }
    return (
        <span>
            {children}
            <span
                style={{ color: '#0062cc', cursor: 'pointer' }}
                role="presentation"
                onClick={this.showShortText.bind(this)}
            > Less</span>
        </span>
    );
  };

  showLongText() {
    const { children } = this.props;
    this.setState({ charLimit: children.length });
    this.getReadMoreContent();
  }

  showShortText() {
    this.setState(this.initialState);
    this.getReadMoreContent();
  }

  render() {
    return (
      <div>
        {this.getReadMoreContent()}
      </div>
    );
  }
}

export default ReadMoreAndLess;