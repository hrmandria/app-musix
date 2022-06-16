import React, {Component} from 'react';
import "./Scanner.css";
import QrReader from 'react-qr-reader'


class Scanner extends Component{
    state = {
        result: null
    }
    handleScan = data => {
        if (data) {
          this.setState({
            result: data
          })
          localStorage.setItem("encrypted",this.state.result)
          setTimeout(() => { 
               this.props.history.push("/play"); 
            }, 2000);
        }
      }
    handleError = err => {
        console.error(err)
    }

    render() {
        return (
        <div className="scanner">

            <h2 style={{color:"brown"}}>Scan your QR Code</h2>
                <div>
                    <button
                        type="button"
                        className="myButton"
                        aria-label="Camera"
                        id="idButton"
                    >   
                         <QrReader
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan} 
                            id="qrscan"
                            style= {{width : "300px", marginLeft: "0.5px"}}
                        /> 
                    </button>   
                </div>        
                <h3 className="result" style={{color:"brown"}}>Decoded QR Code : </h3>
                <h3 className="scanned" style={{color:"black"}}>{this.state.result}</h3>
		</div>
        )

    }
}

export default Scanner;