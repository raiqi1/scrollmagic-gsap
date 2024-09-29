import DonateButton from '@/app/Button'
import React from 'react'

export default function DonateComponent() {
  return (
    <div className="relative z-10">
      <div className="min-h-screen w-full flex flex-col justify-center ">
        <div className="md:ml-36 md:mr-36 max-sm:m-10 pt-20 mb-28">
          {/* button close */}
          <div className="flex w-fit p-2">
            <DonateButton name="Close" route="/" />
          </div>
          <div className="font-sans flex flex-col border-black border-[3px] w-full  mt-10 bg-pink-500">
            <div className="border-b-[3px] border-black p-7">
              <h1 className="md:text-5xl font-bold">Donate please,</h1>
              <p className="md:text-3xl mt-2">
                we need your support like never before
              </p>
            </div>
            <div className="border-b-[3px] border-black p-7">
              <p className="md:text-3xl mt-2">Single payment</p>
              <h1 className="flex gap-2 mt-3">
                <span className="md:text-3xl">Card Number: </span>
                <span className="md:text-3xl font-bold">
                  4731 2196 1647 4239
                </span>
              </h1>
              <h1 className="flex gap-2 mt-3">
                <span className="md:text-3xl">Fondy direct link: </span>
                <span className="md:text-3xl font-bold">
                  pay.fondy.eu/s/EdDlsY6XgRHV
                </span>
              </h1>
            </div>
            <div className="border-b-[3px] border-black p-7 ">
              <h1 className="flex gap-2 mt-3">
                <p className="md:text-3xl mt-2">
                  Subscribe and be our regular patron
                </p>
                <img
                  src="https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/62717f49023fd7bcf525eaec_kindpng_351793.png"
                  alt=""
                  className="w-30 h-10"
                />
              </h1>
              <div className="flex gap-4 mt-3">
                <DonateButton name="Fondy" />
                <DonateButton name="Patreon" />
              </div>
            </div>
            <div className="border-b-[3px] border-black p-7 ">
              <p className="md:text-3xl mt-2">Cryptocurrency</p>
              <div className="flex mt-3 gap-2">
                <h1 className="md:text-3xl mt-2 font-bold">BTC</h1>
                <p className="md:text-3xl mt-2">
                  1JzRCN5copEPkE1ncuT7z5eTbPZBxvPYb3
                </p>
              </div>
              <div className="flex mt-3 gap-2">
                <h1 className="md:text-3xl mt-2 font-bold">ETH</h1>
                <p className="md:text-3xl mt-2">
                  0x7b8916382387d2c34b4bcd38daf7071a1bb30dba
                </p>
              </div>
            </div>
            <div className="border-b-[3px] border-black p-7 ">
              <p className="md:text-3xl mt-2">PayPal</p>
              <h1 className="md:text-3xl font-bold mt-3">
                pay.fondy.eu/s/EdDlsY6XgRHV
              </h1>
            </div>
            <div className="border-b-[3px] border-black p-7">
              <p className="md:text-3xl mt-2">SWIFT in Euro (EUR)</p>
              <p className="md:text-2xl mt-3 font-bold">Beneficiary:</p>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">Account (IBAN): </span>
                <span className="md:text-3xl font-bold">
                  UA143123560000026007300972110
                </span>
              </h1>
              <p className="md:text-3xl mt-2">
                CO “CF “INNOVATIVE SOLUTIONS FOR ANIMALS”{' '}
              </p>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">Address: </span>
                <span className="md:text-3xl ">
                  Ukraine, Kiev, Sagaidachnogo Petra str, 25-B, floor 6, office
                  603
                </span>
              </h1>
              <p className="md:text-2xl mt-8 font-bold">Correspondent bank: </p>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">BIC (SWIFT) CODE</span>
                <span className="md:text-3xl">DEUTDEFF</span>
              </h1>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">Bank name</span>
                <span className="md:text-3xl">
                  DEUTSCHE BANK AG, Frankfurt am Main
                </span>
              </h1>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">Account</span>
                <span className="md:text-3xl">947057610</span>
              </h1>
              <p className="md:text-2xl mt-8 font-bold">Beneficiary’s Bank</p>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">BIC (SWIFT) CODE:</span>
                <span className="md:text-3xl">COSBUAUKZAK</span>
              </h1>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">Bank name </span>
                <span className="md:text-3xl">
                  JCS STATE SAVINGS BANK OF UKRAINE
                </span>
              </h1>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">Bank address: </span>
                <span className="md:text-3xl">KIEV, UKRAINE</span>
              </h1>
            </div>
            <div className="  p-7">
              <p className="md:text-3xl mt-2">SWIFT in Euro (EUR)</p>
              <p className="md:text-2xl mt-3 font-bold">Beneficiary:</p>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">Account (IBAN): </span>
                <span className="md:text-3xl font-bold">
                  UA143123560000026007300972110
                </span>
              </h1>
              <p className="md:text-3xl mt-2">
                CO “CF “INNOVATIVE SOLUTIONS FOR ANIMALS”{' '}
              </p>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">Address: </span>
                <span className="md:text-3xl ">
                  Ukraine, Kiev, Sagaidachnogo Petra str, 25-B, floor 6, office
                  603
                </span>
              </h1>
              <p className="md:text-2xl mt-8 font-bold">Correspondent bank: </p>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">BIC (SWIFT) CODE</span>
                <span className="md:text-3xl">DEUTDEFF</span>
              </h1>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">Bank name</span>
                <span className="md:text-3xl">
                  DEUTSCHE BANK AG, Frankfurt am Main
                </span>
              </h1>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">Account</span>
                <span className="md:text-3xl">947057610</span>
              </h1>
              <p className="md:text-2xl mt-8 font-bold">Beneficiary’s Bank</p>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">BIC (SWIFT) CODE:</span>
                <span className="md:text-3xl">COSBUAUKZAK</span>
              </h1>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">Bank name </span>
                <span className="md:text-3xl">
                  JCS STATE SAVINGS BANK OF UKRAINE
                </span>
              </h1>
              <h1 className="flex gap-2 mt-2">
                <span className="md:text-3xl">Bank address: </span>
                <span className="md:text-3xl">KIEV, UKRAINE</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
