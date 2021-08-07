import {Component as C1} from 'react'


class Dimensions extends C1 {

    constructor(props) {
        super(props);

        console.log("Props are ", props);
    }

    render() {

        return (

            <main className="excel-body">
                <section className="header">
                    <h1>Excel POC</h1>

                    <form className="dimensions" id="dimensions" name="dimensions"
                        onSubmit={function (evt) {

                                // Code to Report to Analytics 
                                this.props.submitFn(evt)
                            }
                        }>
                        <div className="align-bottom">{this.props.title}</div>
                        <div className="col">
                            <span>Rows</span>
                            <span><input type="number" required={true} min="1" max="200" name="numOfRows" /></span>
                        </div>
                        <div className="col">
                            <span>Columns</span>
                            <span><input type="number" required={true} min="1" max="20" name="numOfCols" /></span>
                        </div>

                        <div className="align-bottom">
                            <button type="submit" form="dimensions"> Render Excel </button>
                        </div>
                    </form>
                </section>

                {this.props.children}
            </main>

        )
    }
}


export default Dimensions