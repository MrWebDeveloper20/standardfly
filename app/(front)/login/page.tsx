'use client'
import { createUser } from '@/actions'
import { CheckPhoneAction } from '@/actions/CheckPhoneAction'
import { OTP } from '@/actions/sms'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { CgSpinner } from 'react-icons/cg'

export default function LoginPage() {
  const [isStepTwo, setIsStepTwo] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isPhoneNumber, setIsPhoneNumber] = useState('')
  const [isVCode, setIsVCode] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const checkPhone = async (data: FieldValues) => {
    setIsSubmitting(true)

    const { phoneNumber } = data

    const res = await CheckPhoneAction(phoneNumber)

    if (!res) return

    reset()
    setIsStepTwo(true)
    const otp = await OTP(phoneNumber)
    setIsPhoneNumber(phoneNumber)
    setIsVCode(otp.data.code)

    setTimeout(() => {
      setIsSubmitting(false)
    }, 1000)
  }

  const verifyCode = (data: FieldValues) => {
    const { uCode } = data
    const phone = isPhoneNumber
    const verification = uCode === isVCode

    if (!verification) return null

    signIn('credentials', {
      phone,
      callbackUrl: '/',
    })
    reset()
  }

  return (
    <form
      action={createUser}
      // onSubmit={handleSubmit(isStepTwo ? verifyCode : checkPhone)}
      className="flex flex-col justify-center items-center m-2 gap-y-4 h-72 w-80 ring-1 ring-black shadow-lg rounded-xl mx-auto my-10 bg-gray-100"
    >
      {isStepTwo ? (
        <input
          {...register('uCode', {
            required: 'کد احراز را وارد کنید',
          })}
          type="text"
          placeholder="کد احراز"
          className="alib border-2 text-right border-cyan-950 w-4/5 rounded px-3 py-1"
        />
      ) : (
        <div className="w-4/5">
          <input
            {...register('name')}
            type="text"
            placeholder="نام (اختیاری)"
            className="alib border-2 text-right border-cyan-950 w-full rounded px-3 py-1 my-2"
          />
          <input
            {...register('family')}
            type="text"
            placeholder="فامیلی (اختیاری)"
            className="alib border-2 text-right border-cyan-950 w-full rounded px-3 py-1 my-2"
          />
          <input
            {...register('phone', {
              required: 'لطفا شماره خود را وارد کنید',
            })}
            type="text"
            placeholder="شماره تلفن"
            className="alib border-2 text-right border-cyan-950 w-full rounded px-3 py-1 my-2"
          />
        </div>
      )}
      {errors.phomeNumber && (
        <p className="text-red-500">{`${errors.phomeNumber.message}`}</p>
      )}
      <button
        type="submit"
        // disabled={isSubmitting}
        className=" bg-blue-500 w-4/5 rounded px-3 py-1 text-white disabled:cursor-not-allowed"
      >
        {isStepTwo ? (
          <span className="flex text-lg alib justify-center items-center gap-3">
            ثبت کد
            {isSubmitting && <CgSpinner className="animate-spin" />}
          </span>
        ) : (
          <span className="flex text-lg alib justify-center items-center gap-3">
            ورود
            {isSubmitting && <CgSpinner className="animate-spin" />}
          </span>
        )}
      </button>
    </form>
  )
}
