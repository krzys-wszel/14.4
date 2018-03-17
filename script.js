var movies = [
    {
        id: 1,
        title: 'Pulp Fiction',
        date: '1994',
        length: '154 min',
        director: 'Quentin Tarrantino',
        desc: 'Para złodziejaszków, dwójka wykidajłów, żona szefa przestępczego półświatka _ losy tych ludzi, nieznanych sobie wcześniej, splatają się w przedziwnych okolicznościach.',
        img: 'images/pulp.jpg',
        video: 'https://www.youtube.com/watch?v=Ptw2_M1qDEU'
	},
    {
        id: 2,
        title: 'Skazani na Shawshank ',
        date: '1994',
        length: '144 min',
        director: 'Frank Darabont',
        desc: 'Film powstał na kanwie opowiadania Stephena Kinga Rita Hayworth and Shawshank Redemption. Opowiada historię Andyego Dufresnea, bankiera, który zostaje niesłusznie skazany na karę podwójnego dożywocia za zamordowanie własnej żony i jej kochanka. Trafia do więzienia Shawshank, w którym rządzą ...',
        img: 'images/shawshank.jpg',
        video: 'https://www.youtube.com/playlist?list=PLiTzi0RMVFS1UlOQyIT8QIQs7D9hYjrjg'
	},
    {
        id: 3,
        title: 'Forrest Gump',
        date: '1994',
        length: '144 min',
        director: 'Robert Zemeckis',
        desc: 'Forrest Gump – amerykański film fabularny z 1994 roku w reżyserii Roberta Zemeckisa. Scenariusz fabuły został oparty na powieści o tym samym tytule Winstona Grooma. W tytułową rolę wcielił się tu Tom Hanks. Dochody ze sprzedaży biletów kinowych przyniosło twórcom potężne zyski finansowe. Na całym świecie film ...',
        img: 'images/forrest.jpg',
        video: 'https://www.cda.pl/video/154544963'
	}

];
var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function () {
        return (React.createElement('h2', {}, this.props.title));
    }
});
var MovieDetails = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
            React.createElement('div', {
                    className: 'details'
                },
                React.createElement('ul', {},
                    React.createElement('li', {}, this.props.movie.date),
                    React.createElement('li', {}, this.props.movie.length),
                    React.createElement('li', {}, this.props.movie.director)
                )
            )
        );
    }
});
var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('div', {
                    className: 'right-side-opis'
                },
                React.createElement('p', {}, this.props.desc)
            )
        );
    }
});
var MovieButton = React.createClass({
    propTypes: {
        link: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('div', {
                    className: 'button'
                },
                React.createElement('a', {
                    href: this.props.video,
                    target: '_blank'
                }, 'Zobacz film')
            )
        );
    }
});
var leftSide = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('div', {
                    className: 'left-side'
                },
                React.createElement('img', {
                    src: this.props.image
                })
            )
        );
    }
});
var rightSide = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
            React.createElement('div', {
                    className: 'right-side'
                },
                React.createElement(MovieTitle, {
                    title: this.props.movie.title
                }),
                React.createElement(MovieDetails, {
                    movie: this.props.movie
                }),
                React.createElement(MovieDescription, {
                    desc: this.props.movie.desc
                }),
                React.createElement(MovieButton, {
                    link: this.props.movie.video
                })
            )
        );
    }
});
var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
            React.createElement('div', {
                    className: 'side'
                },
                React.createElement(leftSide, {
                    image: this.props.movie.img
                }, ''),
                React.createElement(rightSide, {
                    movie: this.props.movie
                }, '')
            )
        );
    }
});
var Sides = movies.map(function (movie) {
    return React.createElement(Movie, {
        key: movie.id,
        movie: movie
    });

});
var element = React.createElement('section', {},
    React.createElement('div', {
        className: 'container'
    }, React.createElement('h1', {}, 'NAJLEPSZE FILMY, WG MNIE :) :'), Sides)
);



ReactDOM.render(element, document.getElementById('app'));
