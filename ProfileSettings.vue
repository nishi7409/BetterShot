<!-- cd /mnt/c/users/maxwe/OneDrive/Documents/BetterShot-master/frontend -->
<!-- cd /mnt/c/Users/maxwe/Documents/GitHub/BetterShot/frontend -->
<!-- npm run dev -->

<template>
  <div class="Profile Settings">

    <style>
      body {
        background-image: url('https://wallpaperaccess.com/full/1567665.png');
        background-attachment: fixed;
      }
      .field-name {
        margin-top: 20px;
        font-size: 20px;
        color: #B5B5BC;
      }
      .field-value {
        margin-bottom: 7px;
        font-size: 20px;
        color: #4A4A4A;
      }
      .inner {
        display: inline-block;
      }
    </style>

    <div class="box">
      <h1 class="title">Settings</h1>
    </div>

    <div class="box">
        <figure class="image is-128x128">
          <img class="is-rounded" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg">
        </figure>
        <br>
        <b-button type="normal"><u>Change Profile Picture</u></b-button>
        <br><br>
        <b-button type="is-danger" outlined><u>Delete Profile Picture</u></b-button>
    </div>

    <form class="box">
      <h2 class="title">Info</h2>
      <div class="contents">
        <div>
          <h2 class="field-name">Username</h2>
          <h2 class="field-value">ladiesman217</h2>
          <b-button
            label="Edit"
            type="is-white"
            size="is-small"
            @click="change_username" />
        </div>
        <div>
          <h2 class="field-name">Name</h2>
          <h2 class="field-value">Cranjis McBasketball</h2>
          <b-button
            label="Edit"
            type="is-white"
            size="is-small"
            @click="change_name" />
        </div>
        <div>
          <h2 class="field-name">Email</h2>
          <h2 class="field-value">cranjis.mcbasketball@aol.com</h2>
          <b-button
            label="Edit"
            type="is-white"
            size="is-small"
            @click="change_email" />
        </div>
        <div>
          <h2 class="field-name">Phone Number</h2>
          <h2 class="field-value">1-555-555-5555</h2>
          <b-button
            label="Edit"
            type="is-white"
            size="is-small"
            @click="change_number" />
        </div>
      </div>
    </form>

    <form class="box">
      <h2 class="title is-spaced">Options</h2>
      <div class="contents">
        <b-button type="normal"><u>Change Password</u></b-button>
        <br><br>
        <b-button type="normal"><u>Set Up Two-Factor Authorization</u></b-button>
        <br><br>
        <b-button type="is-danger" outlined><u>Delete Account</u></b-button>
      </div>
    </form>

    <section>
      <b-field label="Name">
          <b-input value="Kevin Garvey"></b-input>
      </b-field>

      <b-field label="Email"
          type="is-danger"
          message="This email is invalid">
          <b-input type="email"
              value="john@"
              maxlength="30">
          </b-input>
      </b-field>

      <b-field label="Username"
          type="is-success"
          message="This username is available">
          <b-input value="johnsilver" maxlength="30"></b-input>
      </b-field>

      <b-field label="Password"
          type="is-warning"
          :message="['Password is too short', 'Password must have at least 8 characters']">
          <b-input value="123" type="password" maxlength="30"></b-input>
      </b-field>

      <b-field label="Subject">
          <b-select placeholder="Select a subject">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
          </b-select>
      </b-field>
    </section>

    <section>
        <div class="block">
            <b-radio v-model="labelPosition"
                native-value="on-border">
                On Border
            </b-radio>
            <b-radio v-model="labelPosition"
                native-value="inside">
                Inside
            </b-radio>
        </div>

        <b-field label="Name" :label-position="labelPosition">
            <b-input value="Kevin Garvey"></b-input>
        </b-field>

        <b-field label="Email"
            :label-position="labelPosition"
            type="is-danger"
            message="This email is invalid">
            <b-input type="email"
                value="john@"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username"
            :label-position="labelPosition"
            type="is-success"
            message="This username is available">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password"
            :label-position="labelPosition"
            type="is-warning">
            <b-input value="123" type="password" maxlength="30"></b-input>
            <template #message>
                <div>Password is too short</div>
                <div>Password must have at least 8 characters</div>
            </template>
        </b-field>

        <b-field label="Subject"
            :label-position="labelPosition">
            <b-select placeholder="Select a subject">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </b-select>
        </b-field>

        <b-field label="Message"
            :label-position="labelPosition">
            <b-input maxlength="200" type="textarea"></b-input>
        </b-field>

        <b-field label="Find a JS framework" :label-position="labelPosition">
            <b-autocomplete
                rounded
                :data="['jQuery', 'Vue', 'React']"
                placeholder="e.g. jQuery"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template #empty>No results found</template>
            </b-autocomplete>
        </b-field>

        <b-field label="Select a date" :label-position="labelPosition">
            <b-datepicker
                placeholder="Click to select..."
                icon="calendar-today"
                trap-focus>
            </b-datepicker>
        </b-field>

        <b-field label="Select datetime" :label-position="labelPosition">
            <b-datetimepicker
                rounded
                placeholder="Click to select..."
                icon="calendar-today"
                horizontal-time-picker>
            </b-datetimepicker>
        </b-field>

        <b-field label="Number!" :label-position="labelPosition">
            <b-numberinput laceholder="99" :min="95"></b-numberinput>
        </b-field>

        <b-field label="Add some tags" :label-position="labelPosition">
            <b-taginput
                :value="['My first tag', 'My second tag']"
                ellipsis
                icon="label"
                placeholder="Add a tag">
            </b-taginput>
        </b-field>

        <b-field label="Select time" :label-position="labelPosition">
            <b-timepicker
                rounded
                placeholder="Click to select..."
                icon="clock">
            </b-timepicker>
        </b-field>

        <hr>
        <p class="title is-6">Also works for grouped field and with addons.</p>

        <b-field label="Search..." :label-position="labelPosition" grouped>
            <b-input placeholder="Search..." type="search"></b-input>
            <p class="control">
                <b-button class="button is-primary">Search</b-button>
            </p>
        </b-field>

        <b-field label="Search..." :label-position="labelPosition">
            <b-input placeholder="Search..." type="search"></b-input>
            <p class="control">
                <b-button class="button is-primary">Search</b-button>
            </p>
        </b-field>
    </section>

    <section>
        <b-checkbox v-model="hasError">Show errors</b-checkbox>

        <b-field label="Username"
            :type="{ 'is-danger': hasError }"
            :message="{ 'Username is not available': hasError }">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password"
            :type="{ 'is-danger': hasError }"
            :message="[
                { 'Password is too short': hasError },
                { 'Password must have at least 8 characters': hasError }
            ]">
            <b-input value="123" type="password" maxlength="30"></b-input>
        </b-field>
    </section>

    <section>
        <b-field message="What do you want to search?">
            <b-input placeholder="Search..."
                type="search"
                icon="magnify">
            </b-input>
            <p class="control">
                <b-button type="is-primary" label="Search" />
            </p>
        </b-field>

        <b-field message="What a beautiful email!!">
            <b-input placeholder="This is expanded" expanded></b-input>
            <p class="control">
                <span class="button is-static">@gmail.com</span>
            </p>
        </b-field>

        <hr>

        <b-field>
            <b-select placeholder="Currency">
                <option>$</option>
                <option>£</option>
                <option>€</option>
            </b-select>
            <b-input type="number" placeholder="0,00"></b-input>
            <p class="control">
                <b-button type="is-success" label="Transfer" />
            </p>
        </b-field>

        <b-field>
            <p class="control">
                <b-button icon-left="format-bold" />
            </p>
            <p class="control">
                <b-button icon-left="format-italic" />
            </p>
            <p class="control">
                <b-button icon-left="format-underline" />
            </p>
            <p class="control">
                <b-button icon-left="format-align-left" />
            </p>
            <p class="control">
                <b-button icon-left="format-align-center" />
            </p>
            <p class="control">
                <b-button icon-left="format-align-right" />
            </p>
            <b-input 
                placeholder="Search..." 
                type="search" 
                icon="magnify"></b-input>
        </b-field>

        <b-field>
            <p class="control">
                <b-button label="Button" type="is-primary" />
            </p>
            <p class="control">
                <b-dropdown>
                    <template #trigger>
                        <b-button type="is-primary" icon-left="menu-down" />
                    </template>

                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else</b-dropdown-item>
                </b-dropdown>
            </p>
        </b-field>

        <b-field>
            <p class="control">
                <b-dropdown>
                    <template #trigger>
                        <b-button label="Filters" icon-right="menu-down" />
                    </template>

                    <b-dropdown-item value="open_issues">Open Issues and Pull Requests</b-dropdown-item>
                    <b-dropdown-item value="your_issues">Your Issues</b-dropdown-item>
                    <b-dropdown-item value="pull_requests">Your Pull Requests</b-dropdown-item>
                    <b-dropdown-item value="everything">Everything</b-dropdown-item>
                </b-dropdown>
            </p>
            <b-input icon="magnify" type="search" placeholder="Search..."></b-input>
        </b-field>
    </section>

  </div>

</template>

<script>
export default {
  methods: {
    change_username() {
      this.$buefy.dialog.prompt({
          message: `Enter New Username:`,
          inputAttrs: {
              maxlength: 100
          },
          trapFocus: true,
          onConfirm: (value) => this.$buefy.toast.open(`Successfully changed username to: ${value}`)
      })
    },
    change_name() {
      this.$buefy.dialog.prompt({
          message: `Enter New Name:`,
          inputAttrs: {
              maxlength: 100
          },
          trapFocus: true,
          onConfirm: (value) => this.$buefy.toast.open(`Successfully changed name to: ${value}`)
      })
    },
    change_email() {
      this.$buefy.dialog.prompt({
          message: `Enter New Email Address:`,
          inputAttrs: {
              maxlength: 100
          },
          trapFocus: true,
          onConfirm: (value) => this.$buefy.toast.open(`Successfully changed email address to: ${value}`)
      })
    },
    change_number() {
      this.$buefy.dialog.prompt({
          message: `Enter New Phone Number:`,
          inputAttrs: {
              maxlength: 100
          },
          trapFocus: true,
          onConfirm: (value) => this.$buefy.toast.open(`Successfully changed phone number to: ${value}`)
      })
    }
  }
}
</script> 