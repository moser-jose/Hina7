import React, {useContext} from 'react';

export const FavoriteContext = React.createContext();

class FavoriteProvider extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate(){
        this.hino=this.props.hino;
        /* console.log(this.hino) */
    }
    changeLanguage = () => {
            this.setState({ data:this.hino })
    }
    render() {
        return (
            
                <FavoriteContext.Provider
                value={{
                    ...this.state= {
                        data:this.hino
                    },
                    changeLanguage: this.changeLanguage
                }}
            >
                {this.props.children}
            </FavoriteContext.Provider>
        );
    }
}
export default FavoriteProvider;
