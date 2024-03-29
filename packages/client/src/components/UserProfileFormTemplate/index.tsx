import React, { useEffect, useState } from 'react'
import { TUserData, TUserPassword } from '../../api/types'

import { ErrorMessage } from '../ErrorMessage'
import { LocationCity } from '../LocationCity'
import { PasswordChangeForm } from '../PasswordChangeForm'
import { TUserSlice } from '../../store/user/state'
import { USER_PROFILE_ERRORS_TEXT } from '../../const/userProfile'
import { UserProfileButtonBlock } from '../UserProfileButtonBlock'
import { UserProfileForm } from '../UserProfileForm'
import style from './index.module.scss'

type TUserProfileFormTemplate = {
  userData: TUserSlice
  logout: () => void
  changeUserDataHandler: (data: TUserData) => void
  changeUserPasswordHandler: (data: TUserPassword) => void
}

export const UserProfileFormTemplate = ({
  logout,
  userData,
  changeUserDataHandler,
  changeUserPasswordHandler,
}: TUserProfileFormTemplate) => {
  const [isEdit, setIsEdit] = useState(false)
  const [hideButtons, setHideButtons] = useState(false)
  const [isPasswordEdit, setIsPasswordEdit] = useState(false)
  const [error, setError] = useState('')
  const [editCity, setEditCity] = useState(false)
  const { isLoading, isError, user, errorMessage } = userData
  const { first_name, second_name } = user

  useEffect(() => {
    if ((isEdit || isPasswordEdit) && !isError && !isLoading) {
      disableEditMode()
    }
  }, [isError, isLoading])

  const userDataEditToggle = () => {
    setHideButtons(true)
    setIsEdit(prevState => !prevState)
  }

  const passwordChangeToggle = () => {
    setHideButtons(true)
    setIsPasswordEdit(prevState => !prevState)
  }

  const disableEditMode = () => {
    setIsEdit(false)
    setHideButtons(false)
    setIsPasswordEdit(false)
  }

  const changeUserData = (values: TUserData) => {
    changeUserDataHandler(values)
  }

  const changeUserPassword = async (values: TUserPassword) => {
    setError('')

    const { newPassword, repeatNewPassword } = values
    if (newPassword !== repeatNewPassword) {
      setError(USER_PROFILE_ERRORS_TEXT.PASSWORD_NOT_SAME)
      return
    }

    changeUserPasswordHandler(values)
  }

  return (
    <div className={style.profileWrapper}>
      {!editCity && (
        <>
          <div className={style.userNameWrapper}>
            <span className={`${style.userNameText} ${style.font_18}`}>
              {first_name}
            </span>
            <span className={`${style.userNameText} ${style.font_18}`}>
              {second_name}
            </span>
          </div>
          {error || isError ? (
            <ErrorMessage
              text={error || errorMessage}
              className="error-message-margin"
            />
          ) : null}
          {isPasswordEdit ? (
            <PasswordChangeForm
              isDisable={!isPasswordEdit}
              onsubmit={changeUserPassword}
              className={style.userProfileFormMargin}
            />
          ) : (
            <UserProfileForm
              userData={user}
              isDisable={!isEdit}
              onsubmit={changeUserData}
              className={style.userProfileFormMargin}
            />
          )}
        </>
      )}
      <LocationCity open={editCity} isEdit={() => setEditCity(false)} />
      {!hideButtons && !editCity ? (
        <UserProfileButtonBlock
          editCityChange={() => setEditCity(true)}
          logOut={logout}
          userDataChange={userDataEditToggle}
          passwordChange={passwordChangeToggle}
        />
      ) : null}
    </div>
  )
}
