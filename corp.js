/** @param {NS} ns **/
export async function main(ns) {
	let player = ns.getPlayer();
	
	if (!player.hasCorporation) startCorp(ns, player);
}

function startCorp(ns, player) {
	const selfFund = player.bitNodeN !== 3 || player.money >= 150e9; // self fund if we have the money even on bn3
	if (selfFund && player.money < 150e9) {
		throw new Error("Insufficient funds to start a corp.");
	}
	const success = ns.corporation.createCorporation("Corp", false);
	if (!success) {
		ns.print("Can't make a corp.");
		return;
	}
}