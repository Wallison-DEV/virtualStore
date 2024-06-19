import { useState } from 'react'
import { useTheme } from 'styled-components'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputMask from 'react-input-mask'

import Button from '../src/app/Components/Button'
import { PrimaryTitle, QuaternaryTitle } from '../../styles'
import { InputDiv } from '../Login/styles'
import * as S from '../src/app/Styles/checkout'

type Installment = {
    quantity: number
    amount: number
    formattedAmount: string
}

const Checkout = () => {
    const [payWithCard, setPayWithCard] = useState(false)
    const [installments, setInstallments] = useState<Installment[]>([])
    const theme = useTheme()

    function parseValue(value: string): string {
        return value.replace(/\D/g, '')
    }

    const schema = yup.object({
        country: yup.string().required("Country is required").min(3, 'The country need to have minimun 3 letters'),
        name: yup.string().required("Name is required").min(3, 'The name need to have minimun 3 letters'),
        cpf: yup.string()
            .transform((value) => parseValue(value))
            .length(11, 'O CPF deve ter exatamente 11 dígitos')
            .required('O campo é obrigatório'),
        tel: yup.string().required("Phone number is required").min(13, 'The phone number need to have minimun 13 numbers'),
        address: yup.string().required("Address is required").min(4, 'The address need to have minimun 8 digits'),
        city: yup.string().required("City is required").min(3, 'The city need to have minimun 3 digits'),
        state: yup.string().required("State is required").min(4, 'The state need to have minimun 4 digits'),
        zip: yup.string().required("ZIP Code is required").transform((value) => parseValue(value)).length(8, 'The zip code need to have 8 digits'),

        cardOwner: yup.string().when((_values, schema) =>
            payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
        cpfCardOwner: yup.string()
            .transform((value) => parseValue(value))
            .length(11, 'O CPF deve ter exatamente 11 dígitos')
            .when((_values, schema) =>
                payWithCard
                    ? schema.required('O campo é obrigatório')
                    : schema
            ),
        cardDisplayName: yup.string().when((_values, schema) =>
            payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
        cardNumber: yup.string()
            .transform((value) => parseValue(value))
            .length(16, 'O número do cartão deve ter exatamente 16 dígitos')
            .when((_values, schema) =>
                payWithCard
                    ? schema.required('O campo é obrigatório')
                    : schema
            ),
        expiresYear: yup.string().when((_values, schema) =>
            payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
        expiresMonth: yup.string().when((_values, schema) =>
            payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
        cardCode: yup.string().when((_values, schema) =>
            payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
        installments: yup.number().when((_values, schema) =>
            payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <div className="container">
            <header>
                <>logo</>
                <>Checkout (2 items)</>
                <>cadeado</>
            </header>
            <S.CheckoutContainer >
                <S.CheckoutDiv>
                    <S.ListForm>
                        <div>
                            <QuaternaryTitle style={{ color: theme.primaryButton, margin: '24px 0', }}>1 Enter a new shipping address</QuaternaryTitle>
                            <S.CheckoutForm onSubmit={handleSubmit(onSubmit)} >
                                <PrimaryTitle>Add a new address</PrimaryTitle>
                                <InputDiv>
                                    <label htmlFor="country">Country/Region</label>
                                    <input id='country' {...register("country")} type="text" />
                                    <span className='error'>{errors.country?.message}</span>
                                </InputDiv>
                                <InputDiv>
                                    <label htmlFor="name">Full name (First and Last name)</label>
                                    <input id='name' {...register("name")} type="text" />
                                    <span className='error'>{errors.name?.message}</span>
                                </InputDiv>
                                <InputDiv>
                                    <label htmlFor="cpf">CPF</label>
                                    <InputMask
                                        mask="999.999.999-99"
                                        id="cpf"
                                        type="text"
                                        {...register("cpf")}
                                    />
                                    <span className='error'>{errors.cpf?.message}</span>
                                </InputDiv>
                                <InputDiv>
                                    <label htmlFor="number">Phone number</label>
                                    <input id='number' {...register("tel")} type="number" />
                                    <span className='error'>{errors.tel?.message}</span>
                                </InputDiv>
                                <InputDiv>
                                    <label htmlFor="address">Address</label>
                                    <input id='address' {...register("address")} type="text" />
                                    <span className='error'>{errors.address?.message}</span>
                                </InputDiv>
                                <InputDiv className='row'>
                                    <InputDiv>
                                        <label htmlFor="city">City</label>
                                        <input id='city' {...register("city")} type="text" />
                                        <span className='error'>{errors.city?.message}</span>
                                    </InputDiv>
                                    <InputDiv>
                                        <label htmlFor="state">State</label>
                                        <input id='state' {...register("state")} type="text" />
                                        <span className='error'>{errors.state?.message}</span>
                                    </InputDiv>
                                    <InputDiv>
                                        <label htmlFor="zip">ZIP Code</label>
                                        <InputMask
                                            mask="99999-999"
                                            id="zip"
                                            type="number"
                                            {...register("zip")}
                                        />
                                        <span className='error'>{errors.zip?.message}</span>
                                    </InputDiv>
                                </InputDiv>
                                <Button type='submit' variant='orange'>
                                    <span>Use this address</span>
                                </Button>
                            </S.CheckoutForm>
                        </div>
                        <div>
                            <QuaternaryTitle style={{ color: theme.primaryButton, margin: '24px 0', }}>2  Payment method</QuaternaryTitle>
                            <S.CheckoutForm action="">
                                <PrimaryTitle>Choose a payment method</PrimaryTitle>
                                <InputDiv className='row'>
                                    <InputDiv>
                                        <label htmlFor="cardOwner">Titular card name</label>
                                        <input id='cardOwner' {...register("cardOwner")} type="text" />
                                        <span className='error'>{errors.cardOwner?.message}</span>
                                    </InputDiv>
                                    <InputDiv>
                                        <label htmlFor="cpfCardOwner">Cpf card owner</label>
                                        <InputMask
                                            mask="999.999.999-99"
                                            id='cpfCardOwner'
                                            {...register("cpfCardOwner")}
                                            type="text"
                                        />
                                        <span className='error'>{errors.cpfCardOwner?.message}</span>
                                    </InputDiv>
                                </InputDiv>
                                <InputDiv className='row'>
                                    <InputDiv>
                                        <label htmlFor="cardDisplayName">Name in display card</label>
                                        <input id='cardDisplayName' {...register("cardDisplayName")} type="text" />
                                        <span className='error'>{errors.cardDisplayName?.message}</span>
                                    </InputDiv>
                                    <InputDiv>
                                        <label htmlFor="cardNumber">Card number</label>
                                        <InputMask
                                            mask="9999 9999 9999 9999"
                                            id='cardNumber'
                                            {...register("cardNumber")}
                                            type="text"
                                        />
                                        <span className='error'>{errors.cardNumber?.message}</span>
                                    </InputDiv>
                                    <InputDiv className='maxWidth-124'>
                                        <label htmlFor="expiresMonth">Expires month</label>
                                        <InputMask
                                            mask="99"
                                            id='expiresMonth'
                                            {...register("expiresMonth")}
                                            type="text"
                                        />
                                        <span className='error'>{errors.expiresMonth?.message}</span>
                                    </InputDiv>
                                    <InputDiv className='maxWidth-124'>
                                        <label htmlFor="expiresYear">Expires year</label>
                                        <InputMask
                                            mask='99'
                                            id='expiresYear'
                                            {...register("expiresYear")}
                                            type="text"
                                        />
                                        <span className='error'>{errors.expiresYear?.message}</span>
                                    </InputDiv>
                                    <InputDiv className='maxWidth-48'>
                                        <label htmlFor="cardCode">CVV</label>
                                        <InputMask
                                            mask='999'
                                            id='cardCode'
                                            {...register("cardCode")}
                                            type="text"
                                        />
                                        <span className='error'>{errors.cardCode?.message}</span>
                                    </InputDiv>
                                </InputDiv>
                                <InputDiv className='maxWidth-124'>
                                    <label htmlFor="installments">
                                        Installment
                                    </label>
                                    <select
                                        id="installments"
                                        {...register("installments")}
                                    >
                                        {installments?.map(
                                            (installment) => (
                                                <option
                                                    value={
                                                        installment.quantity
                                                    }
                                                    key={
                                                        installment.quantity
                                                    }
                                                >
                                                    {
                                                        installment.quantity
                                                    }
                                                    x de{' '}
                                                    {
                                                        installment.formattedAmount
                                                    }
                                                </option>
                                            )
                                        )}
                                    </select>
                                    <span className='error'>{errors.installments?.message}</span>
                                </InputDiv>
                                <Button type='submit' variant='orange'>
                                    <span>Use this payment method</span>
                                </Button>
                            </S.CheckoutForm>
                        </div>
                        <div>
                            <QuaternaryTitle style={{ color: theme.primaryButton, margin: '24px 0', }}>3 Items and shipping</QuaternaryTitle>
                            <S.ConfirmForm action="">
                                <PrimaryTitle>Review items and shipping</PrimaryTitle>
                                <S.CartItem>
                                    <div>
                                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416171_sd.jpg" alt="" />
                                    </div>
                                    <div className='checkDetails'>
                                        <h4>Descrição</h4>
                                        <span>Price</span>
                                        <select id="" value='number'>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    <div className='checkDetails'>
                                        <h5>Choose a delivery option:</h5>
                                        <div>
                                            <h6>Friday, Jun 28</h6>
                                            <p>$19.48 - Delivery</p>
                                        </div>
                                    </div>
                                </S.CartItem>
                                <S.ConfirmDiv>
                                    <Button type='submit' variant='orange'>
                                        <span>Confirm purchase</span>
                                    </Button>
                                    <PrimaryTitle>Payment Total:<span>USD 231.77</span></PrimaryTitle>
                                </S.ConfirmDiv>
                            </S.ConfirmForm>
                        </div>
                    </S.ListForm>
                    <S.SumaryOrder>
                        <QuaternaryTitle>Order Sumary</QuaternaryTitle>
                        <div>
                            <S.KeyPairValue>
                                <p>Items(<span>2</span>):</p>
                                <div>value</div>
                            </S.KeyPairValue>
                            <S.KeyPairValue>
                                <p>Shipping and handling:</p>
                                <div>value</div>
                            </S.KeyPairValue>
                        </div>
                        <S.TotalPairValue>
                            <p>Order total:</p>
                            <div>value</div>
                        </S.TotalPairValue>
                    </S.SumaryOrder>
                </S.CheckoutDiv>
            </S.CheckoutContainer>
        </div>
    )
}

export default Checkout