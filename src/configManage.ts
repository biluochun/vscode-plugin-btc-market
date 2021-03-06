import * as vscode from 'vscode';
export function getApiHost() {
    return vscode.workspace
    .getConfiguration()
    .get<string>('vscodePluginBtcMarket.apiHost') || 'huobi.pro';
}

export function getautoRefreshTime() {
    return vscode.workspace
    .getConfiguration()
    .get<number>('vscodePluginBtcMarket.autoRefreshTime') || 10;
}

export function getconfigSymbol() {
    return vscode.workspace
    .getConfiguration()
    .get<Array<string>>('vscodePluginBtcMarket.symbol') || [];
}


export function getRiseColor() {
    return vscode.workspace
    .getConfiguration()
    .get<string>('vscodePluginBtcMarket.riseColor') || 'green';
}


export function getFallColor() {
    return vscode.workspace
    .getConfiguration()
    .get<string>('vscodePluginBtcMarket.fallColor') || 'red';
}


export async function setconfigSymbol(symbolsConfig:Array<string>) {
    return await vscode.workspace.getConfiguration().update(
        'vscodePluginBtcMarket.symbol',
        symbolsConfig
    );
}