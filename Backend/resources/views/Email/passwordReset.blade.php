@component('mail::message')
# Cambiar Password

Haz click en el botón para cambiar tu password
xd

@component('mail::button', ['url' => 'http://localhost:4200/response-password-reset?token='.$token])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
