const button = document.querySelectorAll('.btn');
const section = document.querySelector('.msec');
const start = document.querySelector('.mbtn');
const main = document.querySelector('.main');
let amo = 10000;
let Depositamount=0;
let withdrawamount=0;
let MoneyTransferamount=0;
start.addEventListener('click', () => {
    main.classList.add("sectionremove");
    section.classList.remove('msec');

})

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        console.log(button[i].value)
        //   DEPOSIT
        if (button[i].value == "Deposit") {
            section.classList.add('sectionremove');
            const section1 = document.querySelector('.sec1')
            section1.style.display = 'block'
            const div1 = document.createElement('div')
            div1.classList.add('s12')
            const accoutNumber = document.createElement('h2');
            accoutNumber.innerHTML = "please enter the Amount"
            const cash = document.createElement('input')
            cash.setAttribute('type', 'text');
            cash.classList.add('inp');
            const Amount = document.createElement('h2');
            Amount.innerHTML = "please enter the pincode"
            const pinCode = document.createElement('input')
            pinCode.setAttribute('type', 'password');
            pinCode.setAttribute('maxlength', '4');
            pinCode.classList.add('inp');
            const submit = document.createElement('button');
            submit.classList.add('btn1');
            submit.innerHTML = 'done'
            const Heading = document.createElement('h1');
            Heading.classList.add('he1');
            Heading.innerHTML = 'DEPOSIT'
            div1.appendChild(Heading);
            section1.appendChild(div1);
            div1.appendChild(accoutNumber);
            div1.appendChild(cash);
            div1.appendChild(Amount)
            div1.appendChild(pinCode)
            div1.appendChild(submit)
            // amount=amount+Number(cash.value);

            submit.addEventListener('click', () => {
                amo = parseInt(cash.value) + amo;
                Depositamount=parseInt(cash.value)
                if (cash.value == '' || isNaN(cash.value) == true) {
                    alert("please enter the amount");
                    return false;
                }
                if (pinCode.value == '' || pinCode.value.length < 4 || isNaN(pinCode.value) == true) {
                    alert("please enter the 4 digit pin");
                    return false;
                }
                div1.style.display = "none";
                const DepositMoney = document.createElement('h2');
                DepositMoney.innerHTML = " YOUR MONEY IS DEPOSITED VIST AGAIN"
                DepositMoney.classList.add('head')
                section1.appendChild(DepositMoney)
                const cancel = document.createElement('button');
                cancel.classList.add('btn1');
                cancel.innerHTML = 'Cancel';
                section1.appendChild(cancel)
                cancel.addEventListener('click', () => {
                    DepositMoney.style.display = "none"
                    cancel.style.display = "none"
                    section1.style.display = 'none';
                    section.classList.remove('sectionremove');
                })

            })

        }
        // withdraw
        if (button[i].value == "Withdraw") {
            section.classList.add('sectionremove');
            const section1 = document.querySelector('.sec3')
            section1.style.display = 'block'
            const div2 = document.createElement('div');
            div2.classList.add('s1')
            const div3 = document.createElement('div');
            div3.classList.add('s1')
            const div4 = document.createElement('div');
            div4.classList.add('s1')
            const CREDIT = document.createElement('button')
            CREDIT.classList.add('btn')
            CREDIT.innerHTML = "Credit bank"
            const SAVINGS = document.createElement('button')
            SAVINGS.classList.add('btn')
            SAVINGS.innerHTML = "Savings bank"
            const CURRENT = document.createElement('button')
            CURRENT.classList.add('btn')
            CURRENT.innerHTML = "Current bank"
            section1.appendChild(div2);
            div2.appendChild(CREDIT)
            section1.appendChild(div3)
            div3.appendChild(SAVINGS)
            section1.appendChild(div4)
            div4.appendChild(CURRENT)
            // credit
            CREDIT.addEventListener('click', () => {
                div2.remove()
                div3.remove()
                div4.remove()
                section1.style.display = 'none'
                const section2 = document.querySelector('.sec2')
                section2.style.display = 'block'
                const div1 = document.createElement('div')
                div1.classList.add('s12')
                const accoutNumber = document.createElement('h2');
                accoutNumber.innerHTML = "please enter the Amount"
                const cash = document.createElement('input')
                cash.setAttribute('type', 'text');
                cash.classList.add('inp');
                const Amount = document.createElement('h2');
                Amount.innerHTML = "please enter the pincode"
                const pinCode = document.createElement('input')
                pinCode.setAttribute('type', 'password');
                pinCode.setAttribute('maxlength', '4');
                pinCode.classList.add('inp');
                const submit = document.createElement('button');
                submit.classList.add('btn1');
                submit.innerHTML = 'done'
                const Heading = document.createElement('h1');
                Heading.classList.add('he1');
                Heading.innerHTML = 'WITHDRAW IN CREDIT BANK'

                section2.appendChild(div1);
                div1.appendChild(Heading);
                div1.appendChild(accoutNumber);
                div1.appendChild(cash);
                div1.appendChild(Amount)
                div1.appendChild(pinCode)
                div1.appendChild(submit)
                submit.addEventListener('click', () => {


                    if (cash.value == '') {
                        alert("please enter the amount");
                        return false;
                    }
                    if (pinCode.value == '' || pinCode.value.length < 4) {
                        alert("please enter the 4 digit pincode");
                        return false;
                    }
                    if (parseInt(cash.value) > amo) {
                        alert("low balance")
                        return false;
                    }
                    amo = amo - parseInt(cash.value);
                    withdrawamount=parseInt(cash.value)

                    div1.style.display = "none";
                    const DepositMoney = document.createElement('h2');
                    DepositMoney.innerHTML = " PLEASE COLLECT THE AMOUNT VIST AGAIN"
                    DepositMoney.classList.add('head')
                    section2.appendChild(DepositMoney)
                    const cancel = document.createElement('button');
                    cancel.classList.add('btn1');
                    cancel.innerHTML = 'Cancel';
                    section2.appendChild(cancel)
                    cancel.addEventListener('click', () => {
                        DepositMoney.style.display = "none"
                        cancel.style.display = "none"
                        section1.style.display = 'none';
                        section.classList.remove('sectionremove');
                    })



                })

            })
            //savings
            SAVINGS.addEventListener('click', () => {
                div2.remove()
                div3.remove()
                div4.remove()
                section1.style.display = 'none'
                const section2 = document.querySelector('.sec2')
                section2.style.display = 'block'
                const div1 = document.createElement('div')
                div1.classList.add('s12')
                const accoutNumber = document.createElement('h2');
                accoutNumber.innerHTML = "please enter the Amount"
                const cash = document.createElement('input')
                cash.setAttribute('type', 'text');
                cash.classList.add('inp');
                const Amount = document.createElement('h2');
                Amount.innerHTML = "please enter the pincode"
                const pinCode = document.createElement('input')
                pinCode.setAttribute('type', 'password');
                pinCode.setAttribute('maxlength', '4');
                pinCode.classList.add('inp');
                const submit = document.createElement('button');
                submit.classList.add('btn1');
                submit.innerHTML = 'done'
                const Heading = document.createElement('h1');
                Heading.classList.add('he1');
                Heading.innerHTML = 'WITHDRAW IN SAVINGS BANK'

                section2.appendChild(div1);
                div1.appendChild(Heading);
                div1.appendChild(accoutNumber);
                div1.appendChild(cash);
                div1.appendChild(Amount)
                div1.appendChild(pinCode)
                div1.appendChild(submit)
                submit.addEventListener('click', () => {
                    console.log(amo)
                    if (cash.value == '') {
                        alert("please enter the amount");
                        return false;
                    }
                    if (pinCode.value == '' || pinCode.value.length < 4) {
                        alert("please enter the 4 digit pincode");
                        return false;
                    }
                    if (parseInt(cash.value) > amo) {
                        alert("low balance")
                        return false;
                    }
                    amo = amo - parseInt(cash.value);
                    withdrawamount=parseInt(cash.value)


                    div1.style.display = "none";
                    const DepositMoney = document.createElement('h2');
                    DepositMoney.innerHTML = " PLEASE COLLECT THE AMOUNT VIST AGAIN"
                    DepositMoney.classList.add('head')
                    section2.appendChild(DepositMoney)
                    const cancel = document.createElement('button');
                    cancel.classList.add('btn1');
                    cancel.innerHTML = 'Cancel';
                    section2.appendChild(cancel)
                    cancel.addEventListener('click', () => {
                        DepositMoney.style.display = "none"
                        cancel.style.display = "none"
                        section1.style.display = 'none';
                        section.classList.remove('sectionremove');
                    })



                })

            })
            // current
            CURRENT.addEventListener('click', () => {
                div2.remove()
                div3.remove()
                div4.remove()
                section1.style.display = 'none'
                const section2 = document.querySelector('.sec2')
                section2.style.display = 'block'
                const div1 = document.createElement('div')
                div1.classList.add('s12')
                const accoutNumber = document.createElement('h2');
                accoutNumber.innerHTML = "please enter the Amount"
                const cash = document.createElement('input')
                cash.setAttribute('type', 'text');
                cash.classList.add('inp');
                const Amount = document.createElement('h2');
                Amount.innerHTML = "please enter the pincode"
                const pinCode = document.createElement('input')
                pinCode.setAttribute('type', 'password');
                pinCode.setAttribute('maxlength', '4');
                pinCode.classList.add('inp');
                const submit = document.createElement('button');
                submit.classList.add('btn1');
                submit.innerHTML = 'done'
                const Heading = document.createElement('h1');
                Heading.classList.add('he1');
                Heading.innerHTML = 'WITHDRAW IN CURRENT BANK'

                section2.appendChild(div1);
                div1.appendChild(Heading);
                div1.appendChild(accoutNumber);
                div1.appendChild(cash);
                div1.appendChild(Amount)
                div1.appendChild(pinCode)
                div1.appendChild(submit)
                submit.addEventListener('click', () => {
                    console.log(amo)
                    if (cash.value == '') {
                        alert("please enter the amount");
                        return false;
                    }
                    if (pinCode.value == '' || pinCode.value.length < 4) {
                        alert("please enter the 4 digit pincode");
                        return false;
                    }
                    if (parseInt(cash.value) > amo) {
                        alert("low balance")
                        return false;
                    }
                    amo = amo - parseInt(cash.value);
                    withdrawamount=parseInt(cash.value)

                    div1.style.display = "none";
                    const DepositMoney = document.createElement('h2');
                    DepositMoney.innerHTML = " PLEASE COLLECT THE AMOUNT VIST AGAIN"
                    DepositMoney.classList.add('head')
                    section2.appendChild(DepositMoney)
                    const cancel = document.createElement('button');
                    cancel.classList.add('btn1');
                    cancel.innerHTML = 'Cancel';
                    section2.appendChild(cancel)
                    cancel.addEventListener('click', () => {
                        DepositMoney.style.display = "none"
                        cancel.style.display = "none"
                        section1.style.display = 'none';
                        section.classList.remove('sectionremove');
                    })



                })

            })
        }
        //balance enquriy
        if (button[i].value == 'BalanceEnquiry') {
            section.classList.add('sectionremove');
            const section1 = document.querySelector('.sec1')
            section1.style.display = 'block'
            const div1 = document.createElement('div')
            div1.classList.add('s12')
            const Amount = document.createElement('h2');
            Amount.innerHTML = "please enter the pincode"
            const pinCode = document.createElement('input')
            pinCode.setAttribute('type', 'password');
            pinCode.setAttribute('maxlength', '4');
            pinCode.classList.add('inp');
            const submit = document.createElement('button');
            submit.classList.add('btn1');
            submit.innerHTML = 'done'
            section1.appendChild(div1);
            div1.appendChild(Amount)
            div1.appendChild(pinCode)
            div1.appendChild(submit)
            submit.addEventListener('click', () => {
                if (pinCode.value == '' || pinCode.value.length < 4) {
                    alert("please enter the pincode");
                    return false;
                }

                div1.style.display = "none";
                const div5 = document.createElement('div')
                div5.classList.add('s12')
                const accoutNumber = document.createElement('h2');
                accoutNumber.innerHTML = "THE REMAINING BALANCE"
                const cash = document.createElement('h1')
                cash.innerHTML = amo
                // cash.classList.add('inp');
                const DepositMoney = document.createElement('h2');
                DepositMoney.innerHTML = " YOUR BALANCE IS: "
                DepositMoney.classList.add('head1')
                section1.appendChild(DepositMoney)
                const cancel = document.createElement('button');
                cancel.classList.add('btn1');
                cancel.innerHTML = 'Cancel';

                section1.appendChild(div5)
                div5.appendChild(accoutNumber);
                div5.appendChild(cash);
                div5.appendChild(cancel)
                cancel.addEventListener('click', () => {
                    DepositMoney.style.display = "none"
                    div5.style.display = "none"
                    section1.style.display = 'none';
                    section.classList.remove('sectionremove');
                })


            })
        }
        //MOMEY TRANSFER
        if (button[i].value == "MoneyTransfer") {
            section.classList.add('sectionremove');
            const section1 = document.querySelector('.sec1')
            section1.style.display = 'block'
            const div1 = document.createElement('div')
            div1.classList.add('s12')
            const accoutNumber = document.createElement('h2');
            accoutNumber.innerHTML = "please enter the Amount"
            const cash = document.createElement('input')
            cash.setAttribute('type', 'text');
            cash.classList.add('inp');
            const Amount = document.createElement('h2');
            Amount.innerHTML = "please enter the pincode"
            const pinCode = document.createElement('input')
            pinCode.setAttribute('type', 'password');
            pinCode.setAttribute('maxlength', '4');
            pinCode.classList.add('inp');
            const accoutNumberRevicer = document.createElement('h2');
            accoutNumberRevicer.innerHTML = "please enter the Amount Number Of Receiver"
            const anumber = document.createElement('input')
            anumber.setAttribute('type', 'text');
            anumber.classList.add('inp');
            const submit = document.createElement('button');
            submit.classList.add('btn1');
            submit.innerHTML = 'done'
            const Heading = document.createElement('h1');
            Heading.classList.add('he1');
            Heading.innerHTML = 'MONEY TRANSFER'
            div1.appendChild(Heading);
            section1.appendChild(div1);
            div1.appendChild(accoutNumberRevicer);
            div1.appendChild(anumber);
            div1.appendChild(accoutNumber);
            div1.appendChild(cash);
            div1.appendChild(Amount)
            div1.appendChild(pinCode)
            div1.appendChild(submit)
            // amount=amount+Number(cash.value);

            submit.addEventListener('click', () => {
                if(anumber<12 || anumber.value==""){
                    alert("invalid account number")
                }

                if (cash.value == '' || isNaN(cash.value) == true) {
                    alert("please enter the amount");
                    return false;
                }
                if (pinCode.value == '' || pinCode.value.length < 4 || isNaN(pinCode.value) == true) {
                    alert("please enter the 4 digit pin");
                    return false;
                }

                if (parseInt(cash.value) > amo) {
                    alert("low balance")
                    return false;
                }
                amo = amo - parseInt(cash.value);
                 MoneyTransferamount= parseInt(cash.value);
                div1.style.display = "none";
                const DepositMoney = document.createElement('h2');
                DepositMoney.innerHTML = `YOUR MONEY ${cash.value} IS TRANFER TO THE ACCOUNT NUMBER ${anumber.value}`
                DepositMoney.classList.add('head')
                section1.appendChild(DepositMoney)
                const cancel = document.createElement('button');
                cancel.classList.add('btn1');
                cancel.innerHTML = 'Cancel';
                section1.appendChild(cancel)
                cancel.addEventListener('click', () => {
                    DepositMoney.style.display = "none"
                    cancel.style.display = "none"
                    section1.style.display = 'none';
                    section.classList.remove('sectionremove');
                })

            })

        }
        // MINI STATEMENT
        if (button[i].value == "MiniStatement") {
            section.classList.add('sectionremove');
            const section1 = document.querySelector('.sec1')
            section1.style.display = 'block'
            const div1 = document.createElement('div')
            div1.classList.add('s12')
            const div2 = document.createElement('div')
            div2.classList.add('s122')
            const Heading = document.createElement('h1');
            Heading.classList.add('he1');
            Heading.innerHTML = 'MINI STATMENT'
            div1.appendChild(Heading);
            div1.appendChild(div2);
            section1.appendChild(div1);
            if(Depositamount!== 0){
                const head1=document.createElement('h2');
                head1.innerHTML="Deposit"
                const head2=document.createElement('h2')
                head2.innerHTML=Depositamount
                div2.appendChild(head1);
                div2.appendChild(head2);
            }
            if(withdrawamount!== 0){
                const head1=document.createElement('h2');
                head1.innerHTML="WITHDRAW"
                const head2=document.createElement('h2')
                head2.innerHTML=withdrawamount
                div2.appendChild(head1);
                div2.appendChild(head2);
            }
            if(MoneyTransferamount!== 0){
                const head1=document.createElement('h2');
                head1.innerHTML="MONEY TRANSFOR"
                const head2=document.createElement('h2')
                head2.innerHTML=MoneyTransferamount
                div2.appendChild(head1);
                div2.appendChild(head2);
            }
            const cancel = document.createElement('button');
                cancel.classList.add('btn1');
                cancel.innerHTML = 'Cancel';
                section1.appendChild(cancel)
                cancel.addEventListener('click', () => {
                    div1.style.display="none"
                    cancel.style.display = "none"
                    section1.style.display = 'none';
                    section.classList.remove('sectionremove');
                })
            
        }
        // exit  
        if (button[i].value == 'Exit') {
            button[i].addEventListener('click', () => {
                location.reload()
            })
        }
    })
}


