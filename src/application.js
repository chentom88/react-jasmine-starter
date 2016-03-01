var Application = React.createClass({
    render: function() {
        return (
            <HelloWorld />
        );
    }
});

ReactDOM.render(<Application />, document.getElementById('container'));
