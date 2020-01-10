import React, { Component } from 'react';
import { FormGroup, InputGroup, Button } from 'react-bootstrap';
import Gallery from './Gallery';
import getQuery from '../ActionCreators/getQuery';
import getResults from '../ActionCreators/getResults';
import { connect } from 'react-redux';
import Spinner from './Spinner';

class App extends Component {

    render() {
        return (
            <div className="Global">
                <h2> Book Explorer !</h2>
                <FormGroup >
                    <InputGroup >
                        <input type="text" className="form-control" placeholder="Search for a book"
                            onChange={(e) => this.props.getQuery(e)}
                            onKeyPress={event => {
                                if (event.key == "Enter") {
                                    this.props.getResults(this.props.query);
                                }
                            }
                            }
                        />
                        <Button onClick={() => this.props.getResults(this.props.query)}>
                            Search
                        </Button>
                    </InputGroup>
                </FormGroup>
                {this.props.isLoading ? <Spinner /> : <Gallery items={this.props.items && this.props.items.items} />}

                {this.props.error ? < div className="alert alert-danger" role="alert">
                    Please enter a book name</div> : null
                }
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        items: state.itemReducer.items,
        query: state.queryReducer.query,
        isLoading: state.itemReducer.isLoading,
        error: state.itemReducer.isError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getQuery: (e) => dispatch(getQuery(e)),
        getResults: (t) => dispatch(getResults(t))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);