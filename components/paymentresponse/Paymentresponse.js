import React from 'react';

const Paymentresponse = () => {
    const paymentRes = false;
    return (
        <div>
            {   paymentRes ? 
                    <div className="alert alert-success" role="alert">
                        Payment Success
                    </div>
                :
                <div className="alert alert-danger" role="alert">
                    Payment Failed
                </div>
            }
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis necessitatibus libero at quis illo, ut harum minima
                asperiores voluptate numquam facere, ducimus reiciendis tempora est quaerat et! Eius, culpa?
            </p>
        </div>
    );
};

export default Paymentresponse;