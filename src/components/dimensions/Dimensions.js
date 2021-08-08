import {Component} from 'react'

class Dimensions extends Component{

    constructor(props) {
        super(props);

        console.log("Props are ", props);
    }

    render() {

        var me = this;
        return (
            <main className="excel-body">
                <section className="header">
                    <h1>Excel POC</h1>

                    <form className="dimensions" id="dimensions" name="dimensions"
                        onSubmit={
                            function (evt) {
                                evt.preventDefault();
                                // Code to Report to Analytics 
                                this.props.submitFn(evt)
                            }.bind(me)
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

                <section class="excel">
                    <div class="formula-bar">
                        <span> Formula Bar for</span> <span id="cell-in-focus"> Row # , Col #</span> = <span>
                        <textarea id="formula-text-area"
                        class="formula-text-area"></textarea></span>

                    </div>
                    <table class="excel-table" id="book1"></table>
                </section>
            </main>

        )
    }
}

export default Dimensions;