<script lang="ts">

    // import {Coupon} from "$lib/model";
    import Card, {Actions, Content} from "@smui/card";
    import {Icon} from "@smui/common";
    import Button from "@smui/button";

    export let coupon;
    export let worksCount;
    export let doesNotWorkCount;

    // let works: boolean | null = null;
    let works: boolean | null = null;

    const onWorksClicked = () => {
        if (works === true) {
            worksCount--;
            works = null;
        } else if (works === false) {
            worksCount++;
            doesNotWorkCount--;
            works = true;
        } else { // Null case
            worksCount++;
            works = true;
        }
    }
    const onDoesNotWorkClicked = () => {
        if (works === false) {
            doesNotWorkCount--;
            works = null;
        } else if (works === true) {
            doesNotWorkCount++;
            worksCount--;
            works = false;
        } else { // Null case
            doesNotWorkCount++;
            works = false;
        }
    }
</script>

<Card>
    <Content class="coupon-card-content">
        <h2 class="mdc-typography--headline6" style="margin: 0;">{coupon.code}</h2>
        <h3 class="mdc-typography--subtitle2" style="margin: 0 0 10px; color: #888;">
            {#if coupon.type.toLowerCase() === "fach"}
                {coupon.value} Fach Punkte
            {:else if coupon.type.toLowerCase() === "extra"}
                {coupon.value} Extra Punkte
            {/if}
        </h3>
        <div>ab einem Einkauf im Wert von {coupon.price} €</div>
        <br>
        <div>Gilt für {coupon.product}</div>
    </Content>
    <Actions>
        <Button color={works ? "primary" : "secondary"} title="Funktioniert" on:click={onWorksClicked}>
            <Icon class="{works ? 'material-icons' : 'material-icons-outlined'}" on>thumb_up</Icon>
            {worksCount}
        </Button>
        <Button color={works===false ? "primary" : "secondary"} title="Funktioniert nicht"
                on:click={onDoesNotWorkClicked}>
            <Icon class="{works===false ? 'material-icons' : 'material-icons-outlined'}" on>thumb_down</Icon>
            {doesNotWorkCount}
        </Button>
    </Actions>
</Card>

<style>
    :global(.coupon-card-content) {
        height: 160px;
    }

</style>