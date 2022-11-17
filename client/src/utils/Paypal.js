import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class Paypal extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log("paypal 결제 성공");

            this.props.onSuccess(payment)
        }

        const onCancel = (data) => {
            console.log('paypal 결제 취소');
        }

        const onError = (err) => {
            console.log("paypal 에러 발생");
        }

        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.total;

        const client = {
            sandbox: 'ATHoaUPgCKoNOD4pExA8Nx_lszXC5VN2QPGdswTRv5i_v0VPFVIs8jCGdVmcZuMwWNHeV10Z1RMDXhRl',
            production: 'YOUR-PRODUCTION-APP-ID',
        }

        return (
            <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
                style={{
                    size: 'large',
                    color: 'blue',
                    shape: 'rect',
                    label: 'checkout'
                }}
            />
        );
    }
}