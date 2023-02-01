<template>
    <div class="container">
    </div>

    <div class="regButt">
        <a :href="`https://register.bit.camp`">
            <h1>Register Here!</h1>
        </a>
    </div>
</template>

<script lang="ts">

</script>

<style scoped>
.container {
    height: 9vw;
}

.regButt {
    width: fit-content;
    margin-bottom: 10px;
    margin-top: 10px;
    padding-left: 3vw;
    padding-right: 3vw;
    padding-top: 1.4vw;
    padding-bottom: 1.4vw;

    text-align: center;
    align-items: center;
    font-size: 1vw;
    border-radius: 1vw;

    background-size: cover !important;
    background: #14473B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;

    z-index: 10;
    transition: all 0.2s;
}

.regButt:hover {
    padding-left: 3.5vw;
    padding-right: 3.5vw;
    padding-top: 1.9vw;
    padding-bottom: 1.9vw;
    transition: padding 0.2s, width 0.2s, height 0.2s;
}

@media (max-width: 768px) {
    .regButt {
        font-size: 1.5vw;
        padding-left: 2.3vw;
        padding-right: 2.3vw;
        padding-top: 1.4vw;
        padding-bottom: 1.4vw;
    }

    .container {
        height: 12vw;
    }
}
</style>
