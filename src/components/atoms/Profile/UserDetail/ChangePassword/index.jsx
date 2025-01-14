import React from 'react';
import { StyledEditForm } from '../EditBank/EditForm.styles';
import Form from '@/components/molecules/Form/Form';
import { useForm } from '@/components/molecules/Form';
import Field from '@/components/atoms/Field';
import Button from '@/components/atoms/Button';
import userService from '@/services/userService';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import Toast from '@/components/molecules/Toast';

const ChangePassword = () => {
  const { user, onLogout } = useContextHook(AuthContext, v => ({
    user: v.user,
    onLogout: v.onLogout,
  }));

  const [form] = useForm();
  async function handelSubmit(e) {
    let obj = {
      currentPassword: e.current_Password,
      newPassword: e.new_Password,
    };
    try {
      await userService.updatePassword(obj, user?._id);
      Toast({
        type: 'success',
        message: 'Password Updated Successfully!',
      });
      onLogout();
    } catch (error) {
      Toast({
        type: 'error',
        message: error.message,
      });
    }
  }
  return (
    <StyledEditForm form={form} onSubmit={handelSubmit}>
      <Form.Item
        type="password"
        label="Current Password"
        name="current_Password"
        sm
        rounded
        placeholder="Enter Current Password"
        rules={[
          {
            required: true,
            message: 'Password is required',
          },
        ]}>
        <Field maxLength={64} />
      </Form.Item>
      <div className="combine-fields">
        <Form.Item
          type="password"
          label="New Password"
          name="new_Password"
          sm
          rounded
          placeholder="Enter New Password"
          rules={[
            {
              required: true,
              message: 'Password is required',
            },
            { password: true },
            {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\-]).{8,}$/,
              message:
                'Password must be 8 char long with 1 special character 1 number and 1 capital and small alphabet',
            },
          ]}>
          <Field maxLength={64} />
        </Form.Item>
        <Form.Item
          type="password"
          label="Confirm Password"
          name="confirm_Password"
          sm
          rounded
          placeholder="confirm password"
          rules={[
            {
              required: true,
              message: 'Password is required',
            },
            {
              transform: value => value !== form.getFieldValue('new_Password'),
              message: 'The two passwords that you entered do not match!',
            },
          ]}>
          <Field maxLength={64} />
        </Form.Item>
      </div>
      <Button rounded md btntype="primary" width="170" htmlType="submit">
        Change Password
      </Button>
    </StyledEditForm>
  );
};

export default ChangePassword;
