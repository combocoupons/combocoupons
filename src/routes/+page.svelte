<script lang="ts">
    import type {Coupon} from "$lib/model";
    import CouponCard from "./CouponCard.svelte";
    import LayoutGrid, {Cell} from '@smui/layout-grid';
    import Fab, {Icon as FabIcon, Label} from '@smui/fab';
    import Textfield from '@smui/textfield';
    import TfIcon from '@smui/textfield/icon';
    import {base} from '$app/paths'

    export let data;
    const coupons: Coupon[] = data.coupons;
    let filterText = "";

    $: filteredCoupons = coupons.filter((c, _i, _a) => c.code.includes(filterText.trim()));

    function getRandomInt() {
        return Math.floor(Math.random() * 300);
    }
</script>

<svelte:head>
    <!-- SMUI Styles -->
    <link rel="stylesheet" href="{base}/smui.css" media="(prefers-color-scheme: light)" />
</svelte:head>

<main class="coupon-list">
    <LayoutGrid style="width: 100%" fixedColumnWidth>
        <Cell span={12}>
            <div class="header">
                <Textfield class="search-coupons-field" variant="outlined" label="Suchen" bind:value={filterText}>
                    <TfIcon class="material-icons" slot="leadingIcon">search</TfIcon>

                    <TfIcon class="material-icons" slot="trailingIcon" role="button" on:click={() => filterText=""}>
                        {#if filterText !== ""}
                            cancel
                        {/if}
                    </TfIcon>
                </Textfield>
                <Fab class="new-coupon-btn" color="primary" extended>
                    <FabIcon class="material-icons">add</FabIcon>
                    <Label>Neu</Label>
                </Fab>
            </div>
        </Cell>
        {#each filteredCoupons as coupon (coupon.code)}
            <Cell span={4}>
                <CouponCard bind:coupon worksCount={getRandomInt()} doesNotWorkCount={getRandomInt()}/>
            </Cell>
        {/each}
    </LayoutGrid>
    {#if filteredCoupons.length === 0}
        <h2>Keine Coupons gefunden</h2>
    {/if}
</main>

<style>
    .header {
        display: flex;
        width: 100%;
        align-items: center;
    }

    :global(.search-coupons-field) {
        flex-grow: 1;
    }

    :global(.new-coupon-btn) {
        flex-shrink: 0;
        margin-left: 1rem;
    }

    .coupon-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /*width: 100%;*/
        /*margin: 0 auto;*/
    }

    :global(.mdc-card) {
        /*width: 300px;*/
        /*    margin: 10px 0;*/
    }
</style>