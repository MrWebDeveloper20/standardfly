import { useEffect, useState } from 'react'

const Adult = (props) => {
  const [adult, setAdult] = useState(props.adult)

  const [latinName1, setAdultLatin1] = useState()
  const [latinName2, setAdultLatin2] = useState()
  const [latinName3, setAdultLatin3] = useState()
  const [latinName4, setAdultLatin4] = useState()
  const [latinName5, setAdultLatin5] = useState()
  const [latinName6, setAdultLatin6] = useState()
  const [latinName7, setAdultLatin7] = useState()
  const [latinName8, setAdultLatin8] = useState()
  const [latinName9, setAdultLatin9] = useState()

  const setALatin = (event) => {
    // setAdultLatin(...latinName1,latinName)
    console.log('test', event.target.id, event.target.value)
    // console.log('test2',latinName)
    switch (event.target.id) {
      case 'latinName1':
        setAdultLatin1(event.target.value)
        break
      case 'latinName2':
        setAdultLatin2(event.target.value)
        break
      case 'latinName3':
        setAdultLatin3(event.target.value)
        break
      case 'latinName4':
        setAdultLatin4(event.target.value)
        break
      case 'latinName5':
        setAdultLatin5(event.target.value)
        break
      case 'latinName6':
        setAdultLatin6(event.target.value)
        break
      case 'latinName7':
        setAdultLatin7(event.target.value)
        break
      case 'latinName8':
        setAdultLatin8(event.target.value)
        break
      case 'latinName9':
        setAdultLatin9(event.target.value)
        break
      default:
        break
    }
    // setAdultLatin1(latinName)
  }
  // console.log('test6',latinName1)
  // console.log('test7',latinName2)
  // console.log('test8',latinName3)

  const [family1, setAdultFamily1] = useState()
  const [family2, setAdultFamily2] = useState()
  const [family3, setAdultFamily3] = useState()
  const [family4, setAdultFamily4] = useState()
  const [family5, setAdultFamily5] = useState()
  const [family6, setAdultFamily6] = useState()
  const [family7, setAdultFamily7] = useState()
  const [family8, setAdultFamily8] = useState()
  const [family9, setAdultFamily9] = useState()

  const setAFamily = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'family1':
        setAdultFamily1(event.target.value)
        break
      case 'family2':
        setAdultFamily2(event.target.value)
        break
      case 'family3':
        setAdultFamily3(event.target.value)
        break
      case 'family4':
        setAdultFamily4(event.target.value)
        break
      case 'family5':
        setAdultFamily5(event.target.value)
        break
      case 'family6':
        setAdultFamily6(event.target.value)
        break
      case 'family7':
        setAdultFamily7(event.target.value)
        break
      case 'family8':
        setAdultFamily8(event.target.value)
        break
      case 'family9':
        setAdultFamily9(event.target.value)
        break
      default:
        break
    }
  }

  // console.log('test4',family2)

  const [sex1, setAdultSex1] = useState()
  const [sex2, setAdultSex2] = useState()
  const [sex3, setAdultSex3] = useState()
  const [sex4, setAdultSex4] = useState()
  const [sex5, setAdultSex5] = useState()
  const [sex6, setAdultSex6] = useState()
  const [sex7, setAdultSex7] = useState()
  const [sex8, setAdultSex8] = useState()
  const [sex9, setAdultSex9] = useState()

  const setASex = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'sex1':
        setAdultSex1(event.target.value)
        break
      case 'sex2':
        setAdultSex2(event.target.value)
        break
      case 'sex3':
        setAdultSex3(event.target.value)
        break
      case 'sex4':
        setAdultSex4(event.target.value)
        break
      case 'sex5':
        setAdultSex5(event.target.value)
        break
      case 'sex6':
        setAdultSex6(event.target.value)
        break
      case 'sex7':
        setAdultSex7(event.target.value)
        break
      case 'sex8':
        setAdultSex8(event.target.value)
        break
      case 'sex9':
        setAdultSex9(event.target.value)
        break
      default:
        break
    }
  }

  const [melliode1, setAdultMelli1] = useState()
  const [melliode2, setAdultMelli2] = useState()
  const [melliode3, setAdultMelli3] = useState()
  const [melliode4, setAdultMelli4] = useState()
  const [melliode5, setAdultMelli5] = useState()
  const [melliode6, setAdultMelli6] = useState()
  const [melliode7, setAdultMelli7] = useState()
  const [melliode8, setAdultMelli8] = useState()
  const [melliode9, setAdultMelli9] = useState()

  const setAmelliode = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'melliode1':
        setAdultMelli1(event.target.value)
        break
      case 'melliode2':
        setAdultMelli2(event.target.value)
        break
      case 'melliode3':
        setAdultMelli3(event.target.value)
        break
      case 'melliode4':
        setAdultMelli4(event.target.value)
        break
      case 'melliode5':
        setAdultMelli5(event.target.value)
        break
      case 'melliode6':
        setAdultMelli6(event.target.value)
        break
      case 'melliode7':
        setAdultMelli7(event.target.value)
        break
      case 'melliode8':
        setAdultMelli8(event.target.value)
        break
      case 'melliode9':
        setAdultMelli9(event.target.value)
        break
      default:
        break
    }
  }

  const [dayI1, setAdultDayI1] = useState()
  const [dayI2, setAdultDayI2] = useState()
  const [dayI3, setAdultDayI3] = useState()
  const [dayI4, setAdultDayI4] = useState()
  const [dayI5, setAdultDayI5] = useState()
  const [dayI6, setAdultDayI6] = useState()
  const [dayI7, setAdultDayI7] = useState()
  const [dayI8, setAdultDayI8] = useState()
  const [dayI9, setAdultDayI9] = useState()

  const setADayI = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'dayI1':
        setAdultDayI1(event.target.value)
        break
      case 'dayI2':
        setAdultDayI2(event.target.value)
        break
      case 'dayI3':
        setAdultDayI3(event.target.value)
        break
      case 'dayI4':
        setAdultDayI4(event.target.value)
        break
      case 'dayI5':
        setAdultDayI5(event.target.value)
        break
      case 'dayI6':
        setAdultDayI6(event.target.value)
        break
      case 'dayI7':
        setAdultDayI7(event.target.value)
        break
      case 'dayI8':
        setAdultDayI8(event.target.value)
        break
      case 'dayI9':
        setAdultDayI9(event.target.value)
        break
      default:
        break
    }
  }

  const [monthI1, setAdultmonthI1] = useState()
  const [monthI2, setAdultmonthI2] = useState()
  const [monthI3, setAdultmonthI3] = useState()
  const [monthI4, setAdultmonthI4] = useState()
  const [monthI5, setAdultmonthI5] = useState()
  const [monthI6, setAdultmonthI6] = useState()
  const [monthI7, setAdultmonthI7] = useState()
  const [monthI8, setAdultmonthI8] = useState()
  const [monthI9, setAdultmonthI9] = useState()

  const setAMonthI = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'monthI1':
        setAdultmonthI1(event.target.value)
        break
      case 'monthI2':
        setAdultmonthI2(event.target.value)
        break
      case 'monthI3':
        setAdultmonthI3(event.target.value)
        break
      case 'monthI4':
        setAdultmonthI4(event.target.value)
        break
      case 'monthI5':
        setAdultmonthI5(event.target.value)
        break
      case 'monthI6':
        setAdultmonthI6(event.target.value)
        break
      case 'monthI7':
        setAdultmonthI7(event.target.value)
        break
      case 'monthI8':
        setAdultmonthI8(event.target.value)
        break
      case 'monthI9':
        setAdultmonthI9(event.target.value)
        break
      default:
        break
    }
  }

  const [yearI1, setAdultyearI1] = useState()
  const [yearI2, setAdultyearI2] = useState()
  const [yearI3, setAdultyearI3] = useState()
  const [yearI4, setAdultyearI4] = useState()
  const [yearI5, setAdultyearI5] = useState()
  const [yearI6, setAdultyearI6] = useState()
  const [yearI7, setAdultyearI7] = useState()
  const [yearI8, setAdultyearI8] = useState()
  const [yearI9, setAdultyearI9] = useState()

  const setAYearI = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'yearI1':
        setAdultyearI1(event.target.value)
        break
      case 'yearI2':
        setAdultyearI2(event.target.value)
        break
      case 'yearI3':
        setAdultyearI3(event.target.value)
        break
      case 'yearI4':
        setAdultyearI4(event.target.value)
        break
      case 'yearI5':
        setAdultyearI5(event.target.value)
        break
      case 'yearI6':
        setAdultyearI6(event.target.value)
        break
      case 'yearI7':
        setAdultyearI7(event.target.value)
        break
      case 'yearI8':
        setAdultyearI8(event.target.value)
        break
      case 'yearI9':
        setAdultyearI9(event.target.value)
        break
      default:
        break
    }
  }

  const [dayM1, setAdultDayM1] = useState()
  const [dayM2, setAdultDayM2] = useState()
  const [dayM3, setAdultDayM3] = useState()
  const [dayM4, setAdultDayM4] = useState()
  const [dayM5, setAdultDayM5] = useState()
  const [dayM6, setAdultDayM6] = useState()
  const [dayM7, setAdultDayM7] = useState()
  const [dayM8, setAdultDayM8] = useState()
  const [dayM9, setAdultDayM9] = useState()

  const setADayM = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'dayM1':
        setAdultDayM1(event.target.value)
        break
      case 'dayM2':
        setAdultDayM2(event.target.value)
        break
      case 'dayM3':
        setAdultDayM3(event.target.value)
        break
      case 'dayM4':
        setAdultDayM4(event.target.value)
        break
      case 'dayM5':
        setAdultDayM5(event.target.value)
        break
      case 'dayM6':
        setAdultDayM6(event.target.value)
        break
      case 'dayM7':
        setAdultDayM7(event.target.value)
        break
      case 'dayM8':
        setAdultDayM8(event.target.value)
        break
      case 'dayM9':
        setAdultDayM9(event.target.value)
        break
      default:
        break
    }
  }

  const [monthM1, setAdultmonthM1] = useState()
  const [monthM2, setAdultmonthM2] = useState()
  const [monthM3, setAdultmonthM3] = useState()
  const [monthM4, setAdultmonthM4] = useState()
  const [monthM5, setAdultmonthM5] = useState()
  const [monthM6, setAdultmonthM6] = useState()
  const [monthM7, setAdultmonthM7] = useState()
  const [monthM8, setAdultmonthM8] = useState()
  const [monthM9, setAdultmonthM9] = useState()

  const setAMonthM = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'monthM1':
        setAdultmonthM1(event.target.value)
        break
      case 'monthM2':
        setAdultmonthM2(event.target.value)
        break
      case 'monthM3':
        setAdultmonthM3(event.target.value)
        break
      case 'monthM4':
        setAdultmonthM4(event.target.value)
        break
      case 'monthM5':
        setAdultmonthM5(event.target.value)
        break
      case 'monthM6':
        setAdultmonthM6(event.target.value)
        break
      case 'monthM7':
        setAdultmonthM7(event.target.value)
        break
      case 'monthM8':
        setAdultmonthM8(event.target.value)
        break
      case 'monthM9':
        setAdultmonthM9(event.target.value)
        break
      default:
        break
    }
  }

  const [yearM1, setAdultyearM1] = useState()
  const [yearM2, setAdultyearM2] = useState()
  const [yearM3, setAdultyearM3] = useState()
  const [yearM4, setAdultyearM4] = useState()
  const [yearM5, setAdultyearM5] = useState()
  const [yearM6, setAdultyearM6] = useState()
  const [yearM7, setAdultyearM7] = useState()
  const [yearM8, setAdultyearM8] = useState()
  const [yearM9, setAdultyearM9] = useState()

  const setAYearM = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'yearM1':
        setAdultyearM1(event.target.value)
        break
      case 'yearM2':
        setAdultyearM2(event.target.value)
        break
      case 'yearM3':
        setAdultyearM3(event.target.value)
        break
      case 'yearM4':
        setAdultyearM4(event.target.value)
        break
      case 'yearM5':
        setAdultyearM5(event.target.value)
        break
      case 'yearM6':
        setAdultyearM6(event.target.value)
        break
      case 'yearM7':
        setAdultyearM7(event.target.value)
        break
      case 'yearM8':
        setAdultyearM8(event.target.value)
        break
      case 'yearM9':
        setAdultyearM9(event.target.value)
        break
      default:
        break
    }
  }

  const [birthcount1, setAdultbirthcount1] = useState()
  const [birthcount2, setAdultbirthcount2] = useState()
  const [birthcount3, setAdultbirthcount3] = useState()
  const [birthcount4, setAdultbirthcount4] = useState()
  const [birthcount5, setAdultbirthcount5] = useState()
  const [birthcount6, setAdultbirthcount6] = useState()
  const [birthcount7, setAdultbirthcount7] = useState()
  const [birthcount8, setAdultbirthcount8] = useState()
  const [birthcount9, setAdultbirthcount9] = useState()

  const setABirthcount = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'birthcount1':
        setAdultbirthcount1(event.target.value)
        break
      case 'birthcount2':
        setAdultbirthcount2(event.target.value)
        break
      case 'birthcount3':
        setAdultbirthcount3(event.target.value)
        break
      case 'birthcount4':
        setAdultbirthcount4(event.target.value)
        break
      case 'birthcount5':
        setAdultbirthcount5(event.target.value)
        break
      case 'birthcount6':
        setAdultbirthcount6(event.target.value)
        break
      case 'birthcount7':
        setAdultbirthcount7(event.target.value)
        break
      case 'birthcount8':
        setAdultbirthcount8(event.target.value)
        break
      case 'birthcount9':
        setAdultbirthcount9(event.target.value)
        break
      default:
        break
    }
  }

  // const [melli1, setMelli1] = useState('melli1')
  // const [melli2, setMelli2] = useState(true)
  // const [melli3, setMelli3] = useState(true)
  // const [melli4, setMelli4] = useState(true)
  // const [melli5, setMelli5] = useState(true)
  // const [melli6, setMelli6] = useState(true)
  // const [melli7, setMelli7] = useState(true)
  // const [melli8, setMelli8] = useState(true)
  // const [melli9, setMelli9] = useState(true)

  // const [mellihek1, setmellihek1] = useState('')
  // const [mellihek2, setmellihek2] = useState(true)
  // const [mellihek3, setmellihek3] = useState(true)
  // const [mellihek4, setmellihek4] = useState(true)
  // const [mellihek5, setmellihek5] = useState(true)
  // const [mellihek6, setmellihek6] = useState(true)
  // const [mellihek7, setmellihek7] = useState(true)
  // const [mellihek8, setmellihek8] = useState(true)
  // const [mellihek9, setmellihek9] = useState(true)

  // const [pass1, setPass1] = useState('')
  // const [pass2, setPass2] = useState(false)
  // const [pass3, setPass3] = useState(false)
  // const [pass4, setPass4] = useState(false)
  // const [pass5, setPass5] = useState(false)
  // const [pass6, setPass6] = useState(false)
  // const [pass7, setPass7] = useState(false)
  // const [pass8, setPass8] = useState(false)
  // const [pass9, setPass9] = useState(false)

  // const [passhek1, setpasshek1] = useState('')
  // const [passhek2, setpasshek2] = useState(false)
  // const [passhek3, setpasshek3] = useState(false)
  // const [passhek4, setpasshek4] = useState(false)
  // const [passhek5, setpasshek5] = useState(false)
  // const [passhek6, setpasshek6] = useState(false)
  // const [passhek7, setpasshek7] = useState(false)
  // const [passhek8, setpasshek8] = useState(false)
  // const [passhek9, setpasshek9] = useState(false)

  // const mellihk = (event) => {
  //   // console.log('meeli',event.target.id)
  //   switch (event.target.id) {
  //     case '1':
  //       console.log('mmmm')
  //       setpasshek1(false)
  //       setmellihek1(true)
  //       setPass1(false)
  //       setMelli1(true)
  //       break;

  //     default:
  //       break;
  //   }
  // setpasshek(false)
  // setmellihek(true)
  // setPass(!pass)
  // setMelli(true)
  // }
  // const passhk = (event) => {
  //   // console.log('pass',typeof(event.target.id) )
  //   switch (event.target.id) {
  //     case '1':
  //       console.log('llll')
  //       setmellihek1(false)

  //       setpasshek1(true)
  //       setPass1(false)
  //       setMelli1(true)
  //       break;

  //     default:
  //       break;
  //   }

  //   // setmellihek1(false)
  //   // setpasshek(true)
  //   // setMelli(!melli)
  //   // setPass(true)
  // }

  const [melli, setmelli] = useState(true)
  const [melliChek, setmelliChek] = useState(true)
  const [pass, setpass] = useState(false)
  const [passChek, setpassChek] = useState(false)

  const melliChk = () => {
    setpassChek(false)
    setmelliChek(true)
    setpass(!pass)
    setmelli(true)
  }
  const passChk = () => {
    setmelliChek(false)
    setpassChek(true)
    setmelli(!melli)
    setpass(true)
  }

  adultToParent(latinName1)

  return (
    <>
      {(function (rows, s) {
        while (s++ < adult) {
          rows.push(
            <div value="" key={s} className="w-full">
              <div className="inputs flex lg:flex-col lg:mt-5 lg:gap-8 lg:justify-start m-2 shadow-lg shadow-gray-800 rounded-lg p-2 ">
                <div className="flex flex-row-reverse items-center justify-between w-full h-10">
                  <div className="title flex flex-row-reverse justify-between w-1/2">
                    <div className="titleRight flex flex-row-reverse justify-start items-center gap-3 lg:mr-2 w-full">
                      <span className="alib bg-red-400 rounded-xl px-1">
                        بزرگسال
                      </span>
                      <div className="flex flex-row-reverse justify-center items-center gap-1">
                        {/* {console.log('chek', mellihek1 )} */}
                        {melliChek ? (
                          <div
                            id={s}
                            className="w-3 h-3 rounded-full ring-2 bg-blue-500"
                          ></div>
                        ) : (
                          <div
                            id={s}
                            onClick={() => melliChk()}
                            className="w-3 h-3 ring-2 rounded-full bg-white"
                          ></div>
                        )}

                        <span className="alib mr-1">کد ملی</span>
                      </div>
                      <div className="flex flex-row-reverse justify-center items-center gap-1">
                        {/* {console.log('lklklklk', passhek1)} */}
                        {passChek ? (
                          <div
                            id={s}
                            className="w-3 h-3 rounded-full ring-2 bg-blue-500"
                          ></div>
                        ) : (
                          <div
                            id={s}
                            onClick={() => passChk()}
                            className="w-3 h-3 ring-2 rounded-full bg-white"
                          ></div>
                        )}

                        <span className="alib mr-1">پاسپورت</span>
                      </div>
                    </div>
                  </div>

                  <div className="titleLEFT w-1/3">
                    <button onClick={() => historyPass()}>
                      <span className="alib text-green-500">
                        انتخاب مسافران سابق
                      </span>
                    </button>
                  </div>
                </div>
                <div className="top flex lg:flex-row-reverse gap-2 lg:justify-start">
                  <input
                    onChange={() => setALatin(event)}
                    className="alib w-1/4 p-2 rounded-lg text-right"
                    type="text"
                    name={`latinName${s}`}
                    id={`latinName${s}`}
                    placeholder="نام لاتین"
                  />
                  <input
                    // onChange={()=>`setAdultFamily${s}`(event.target.value)}
                    onChange={() => setAFamily(event)}
                    className="alib w-1/4 p-2 rounded-lg text-right"
                    type="text"
                    name={`family${s}`}
                    id={`family${s}`}
                    placeholder="نام خانوادگی لاتین"
                  />
                  <select
                    onChange={() => setASex(event)}
                    name={`sex${s}`}
                    id={`sex${s}`}
                    className="alib w-1/4 p-2 rounded-lg text-right"
                  >
                    <option value="" disabled>
                      {' '}
                      جنسیت{' '}
                    </option>
                    <option className="alib text-center bg-blue-400" value="MR">
                      آقا
                    </option>
                    <option
                      className="alib text-center bg-pink-400"
                      value="MRS"
                    >
                      بانو
                    </option>
                  </select>
                  {/* {console.log('typpp',melli1) }
                        {console.log('typpp2',pass1) } */}
                  {melli && (
                    <input
                      onChange={() => setAmelliode(event)}
                      className="alib w-1/4 p-2 rounded-lg text-right"
                      type="text"
                      name={`melliode${s}`}
                      id={`melliode${s}`}
                      placeholder="کد ملی "
                    />
                  )}
                  {pass == true && (
                    <div className="alib flex flex-col m-0 w-1/4 p-0 rounded-lg text-right">
                      <span className="alib text-xs">تاریخ تولد (میلادی) </span>
                      <div className="alib flex flex-row-reverse w-full">
                        <select
                          onChange={() => setADayM(event)}
                          className="w-1/5 ring-1 lg:rounded-r-lg"
                          name={`dayM${s}`}
                          id={`dayM${s}`}
                        >
                          {(function (rows, i) {
                            while (i++ < 31) {
                              rows.push(
                                <option value="" key={i}>
                                  {i}
                                </option>
                              )
                            }
                            return rows
                          })([], 0, 10)}
                        </select>
                        <select
                          onChange={() => setAMonthM(event)}
                          className=" font-serif w-2/5 ring-1"
                          name={`monthM${s}`}
                          id={`monthM${s}`}
                        >
                          <option value="1"> Jan </option>
                          <option value="2"> Feb </option>
                          <option value="3"> Mar </option>
                          <option value="4"> Apr </option>
                          <option value="5"> May </option>
                          <option value="6"> Jun </option>
                          <option value="7"> Jul </option>
                          <option value="8"> Aug </option>
                          <option value="9"> Sep </option>
                          <option value="10"> Oct </option>
                          <option value="11"> Nov </option>
                          <option value="12"> Dec </option>
                        </select>
                        <select
                          onChange={() => setAYearM(event)}
                          className="w-2/5 ring-1 lg:rounded-l-lg"
                          name={`yearM${s}`}
                          id={`yearM${s}`}
                        >
                          {(function (rows, j) {
                            for (j = 2012; j > 1924; j--) {
                              rows.push(
                                <option value="" key={j}>
                                  {j}
                                </option>
                              )
                            }
                            return rows
                          })([], 0, 10)}
                        </select>
                      </div>
                    </div>
                  )}
                </div>

                {melli && (
                  <div className="butt1 flex justify-end w-full">
                    <div className="alib datee flex flex-col m-0 w-1/4 p-0 rounded-lg text-right">
                      <span className="alib text-xs">تاریخ تولد </span>
                      <div className="alib flex flex-row-reverse w-full">
                        <select
                          onChange={() => setADayI(event)}
                          className="w-1/5 ring-1 lg:rounded-r-lg"
                          name={`dayI${s}`}
                          id={`dayI${s}`}
                        >
                          {(function (rows, i) {
                            while (i++ < 31) {
                              rows.push(
                                <option value={i} key={i}>
                                  {i}
                                </option>
                              )
                            }
                            return rows
                          })([], 0, 10)}
                        </select>
                        <select
                          onChange={() => setAMonthI(event)}
                          className="alib text-right font-serif w-2/5 ring-1"
                          name={`monthI${s}`}
                          id={`monthI${s}`}
                        >
                          <option value="1"> فروردین </option>
                          <option value="2"> اردیبهشت </option>
                          <option value="3"> خرداد </option>
                          <option value="4"> تیر </option>
                          <option value="5"> مرداد </option>
                          <option value="6"> شهریور </option>
                          <option value="7"> مهر </option>
                          <option value="8"> آبان </option>
                          <option value="9"> آذر </option>
                          <option value="10"> دی </option>
                          <option value="11"> بهمن </option>
                          <option value="12"> اسفند </option>
                        </select>
                        <select
                          onChange={() => setAYearI(event)}
                          className="w-2/5 ring-1 lg:rounded-l-lg"
                          name={`yearI${s}`}
                          id={`yearI${s}`}
                        >
                          {(function (rows, m) {
                            for (m = 1391; m > 1300; m--) {
                              rows.push(
                                <option value={m} key={m}>
                                  {m}
                                </option>
                              )
                            }
                            return rows
                          })([], 0, 10)}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {pass && (
                  <div className="butt flex lg:flex-row-reverse gap-2 lg:justify-start">
                    <input
                      onChange={() => setABirthcount(event)}
                      className="alib w-1/4 p-2 rounded-lg text-right"
                      type="text"
                      name={`birthcount${s}`}
                      id={`birthcount${s}`}
                      placeholder="کشور محل تولد "
                    />
                    <input
                      onChange={() => setApassount(event)}
                      className="alib w-1/4 p-2 rounded-lg text-right"
                      type="text"
                      name={`passount${s}`}
                      id={`passount${s}`}
                      placeholder="کشور صادر کننده پاسپورت "
                    />

                    <input
                      onChange={() => setAPassNum(event)}
                      className="alib w-1/4 p-2 rounded-lg text-right"
                      type="text"
                      name={`passNum${s}`}
                      id={`passNum${s}`}
                      placeholder="شماره پاسپورت "
                    />
                    <div className="alib datee flex flex-col m-0 w-1/4 p-0 rounded-lg text-right">
                      <span className="alib text-xs">
                        تاریخ انقضاء پاسپورت{' '}
                      </span>
                      <div className="alib flex flex-row-reverse w-full">
                        <select
                          onChange={() => setADayEXP(event)}
                          className="w-1/5 ring-1 lg:rounded-r-lg"
                          name={`dayEXP${s}`}
                          id={`dayEXP${s}`}
                        >
                          {(function (rows, i) {
                            while (i++ < 31) {
                              rows.push(
                                <option value="" key={i}>
                                  {i}
                                </option>
                              )
                            }
                            return rows
                          })([], 0, 10)}
                        </select>
                        <select
                          onChange={() => setAMonthEXP(event)}
                          className=" font-serif w-2/5 ring-1"
                          name={`monthEXP${s}`}
                          id={`monthEXP${s}`}
                        >
                          <option value="Jan"> Jan </option>
                          <option value="Feb"> Feb </option>
                          <option value="Mar"> Mar </option>
                          <option value="Apr"> Apr </option>
                          <option value="May"> May </option>
                          <option value="Jun"> Jun </option>
                          <option value="Jul"> Jul </option>
                          <option value="Aug"> Aug </option>
                          <option value="Sep"> Sep </option>
                          <option value="Oct"> Oct </option>
                          <option value="Nov"> Nov </option>
                          <option value="Dec"> Dec </option>
                        </select>
                        <select
                          onChange={() => setAYearEXP(event)}
                          className="w-2/5 ring-1 lg:rounded-l-lg"
                          name={`yearEXP${s}`}
                          id={`yearEXP${s}`}
                        >
                          {(function (rows, k) {
                            for (k = 2024; k < 2030; k++) {
                              rows.push(
                                <option value="" key={k}>
                                  {k}
                                </option>
                              )
                            }
                            return rows
                          })([], 0, 10)}
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        }
        return rows
      })([], 0, 10)}
    </>
  )
}

export default Adult
