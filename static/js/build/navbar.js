/** @jsx React.DOM */

var Navbar = React.createClass({displayName: "Navbar",
    handleNavToggle: function () {
        this.setState({ mobileNavExpanded: !this.state.mobileNavExpanded });
    },
    handleNavChange: function (link) {
        this.setState({ mobileNavExpanded: false });
        this.props.onPageChange(link);
    },
    getInitialState: function () {
        return { mobileNavExpanded: false };
    },
    getDefaultProps: function () {
        return {
            links: [ // Default nav links
                ['/play/watch', 'Watch'],
                ['/play/rules', 'Rules']
            ]
        };
    },
    render: function () {
        var navToggleClass = this.state.mobileNavExpanded ? 'in': '';

        // Generate nav links
        var navLinks = this.props.links.map(function (link, i) {
            return (
                React.createElement("li", {key: i}, 
                    React.createElement("a", {href: link[0], onClick: this.handleNavChange.bind(null, link[0])}, 
                        link[1]
                    )
                )
           );
        }.bind(this));

        return (
            React.createElement("nav", {className: "navbar navbar-inverse"}, 
                React.createElement("div", {className: "container-fluid"}, 
                    React.createElement("div", {className: "navbar-header"}, 
                        React.createElement("a", {className: "navbar-brand", href: "#"}, "Battle Snake"), 
                        React.createElement("button", {type: "button", 
                                className: "navbar-toggle collapsed", 
                                onClick: this.handleNavToggle}, 
                            React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
                            React.createElement("span", {className: "icon-bar"}), 
                            React.createElement("span", {className: "icon-bar"}), 
                            React.createElement("span", {className: "icon-bar"})
                        )
                    ), 
                    React.createElement("div", {className: 'collapse navbar-collapse site-links ' + navToggleClass}, 
                        React.createElement("ul", {className: "nav navbar-nav"}, navLinks)
                    )
                )
            )
        );
    }
});
