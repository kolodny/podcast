/** @jsx React.DOM */

var LoadingComponent = React.createClass({
    getDefaultProps: function () {
        return {
        };
    },
    getInitialState: function () {
        return {
            count: 0,
            dots: '',
            dotsInterval: false,
        };
    },
    start: function () {
        this.setState({ count: Math.max(this.state.count, 0) + 1 }, function () {
            if (!this.state.dotsInterval) {
                var dotsInterval = setInterval(function () {
                    console.log(dotsInterval);
                    this.setState({ dots: this.state.dots.length === 3 ? '' : this.state.dots + '.' });
                }.bind(this), 500);

                this.setState({ dotsInterval: dotsInterval });
            }
        });
    },
    stop: function () {
        this.setState({ count: this.state.count - 1 }, function () {
            if (this.state.count <= 0 && this.state.dotsInterval) {
                clearInterval(this.state.dotsInterval);
                this.setState({ dotsInterval: false, dots: '' });
            }
        });
    },
    render: function () {
        return (
            <div className={this.state.count > 0 ? 'visible' : 'hidden'}>
                <h4><span className="label label-info">thingy in process<span>{this.state.dots}</span></span></h4>
            </div>
        );
    }
});