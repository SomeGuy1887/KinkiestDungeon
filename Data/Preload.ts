
PIXI.Assets.init();

let DisplacementMaps = [
'FutureBox.png',
'TapeTopRight.png',
'TapeTopRightBoxtie.png',
'TapeTopRightCrossed.png',
'TapeTopRightWristtie.png',
'Thigh1SquishClosed.png',
'Thigh1SquishHogtie.png',
'Thigh1SquishKneelClosed.png',
'Thigh2SquishClosed.png',
'Thigh2SquishHogtie.png',
'Thigh2SquishKneelClosed.png',
'Thigh3SquishClosed.png',
'Thigh3SquishHogtie.png',
'Thigh3SquishKneelClosed.png',
'ThighCuffsLeftClosed.png',
'ThighCuffsLeftKneel.png',
'ThighCuffsLeftKneelClosed.png',
'ThighCuffsLeftSpread.png',
'ThighCuffsRightClosed.png',
'ThighCuffsRightKneel.png',
'ThighCuffsRightKneelClosed.png',
'ThighCuffsRightSpread.png',
'CrystalErase.png',
'Xray.png',
'BallSuit.png',
'Bubble.png',
'BubbleHelmet.png',
'Bubble2.png',
'BustHuge.png',
'Fiddle.png',
'TightBelt.png',
'XrayBra.png',
'XrayFace.png',
'XrayPanties.png',
'Yoke.png',
'AnkleCuffLeftClosed.png',
'AnkleCuffLeftKneel.png',
'AnkleCuffLeftKneelClosed.png',
'AnkleCuffLeftSpread.png',
'AnkleCuffRightClosed.png',
'AnkleCuffRightSpread.png',
'AnklesSquishClosed.png',
'AnklesSquishKneel.png',
'Arm1SquishBoxtie.png',
'Arm1SquishWristtie.png',
'Arm2SquishBoxtie.png',
'Arm2SquishWristtie.png',
'ArmHarnessSquish.png',
'ArmStrapCrossed.png',
'BalletClosed.png',
'BalletErase.png',
'BalletEraseSpread.png',
'BalletHogtie.png',
'BalletKneel.png',
'BalletKneelClosed.png',
'BalletRightErase.png',
'BalletRightEraseKneel.png',
'BalletRightEraseClosed.png',
'BalletSpread.png',

'BalletCuffsClosed.png',
'BalletCuffsHogtie.png',
'BalletCuffsKneel.png',
'BalletCuffsKneelClosed.png',
'BalletCuffsSpread.png',
'Belt.png',
'BeltFeet1SquishClosed.png',
'BeltFeet1SquishKneelClosed.png',
'BeltFeet2SquishClosed.png',
'BeltFeet2SquishKneelClosed.png',
'BeltLegs1SquishClosed.png',
'BeltLegs1SquishHogtie.png',
'BeltLegs1SquishKneelClosed.png',
'BeltLegs2SquishClosed.png',
'BeltLegs2SquishHogtie.png',
'BeltLegs2SquishKneelClosed.png',
'BeltSquish.png',
'BinderLeftBoxtie.png',
'BinderLeftWristtie.png',
'BinderRightBoxtie.png',
'BinderRightWristtie.png',
'BootsClosed.png',
'BootsHogtie.png',
'BootsKneel.png',
'BootsKneelClosed.png',
'BootsShortClosed.png',
'BootsShortHogtie.png',
'BootsShortKneel.png',
'BootsShortKneelClosed.png',
'BootsShortSpread.png',
'BootsSpread.png',
'Breastplate.png',
'Calf1SquishClosed.png',
'Calf1SquishKneelClosed.png',
'Calf2SquishClosed.png',
'Calf2SquishHogtie.png',
'Calf2SquishKneelClosed.png',
'Calf3SquishClosed.png',
'Calf3SquishHogtie.png',
'Calf3SquishKneelClosed.png',
'CorsetSquish.png',
'CorsetSquishTight.png',
'CrotchropeSquished.png',
'CuffLeftCrossed.png',
'CuffLeftFree.png',
'CuffLeftFront.png',
'CuffLeftYoked.png',
'CuffRightCrossed.png',
'CuffRightFree.png',
'CuffRightFront.png',
'CuffRightYoked.png',
'CuffsSquishCrossed.png',
'CuffsSquishFront.png',
'ElbowCuffLeftBoxtie.png',
'ElbowCuffLeftCrossed.png',
'ElbowCuffLeftFree.png',
'ElbowCuffLeftFront.png',
'ElbowCuffLeftUp.png',
'ElbowCuffLeftWristtie.png',
'ElbowCuffLeftYoked.png',
'ElbowCuffRightBoxtie.png',
'ElbowCuffRightCrossed.png',
'ElbowCuffRightFree.png',
'ElbowCuffRightFront.png',
'ElbowCuffRightUp.png',
'ElbowCuffRightWristtie.png',
'ElbowCuffRightYoked.png',
'ForeArm1SquishWristtie.png',
'ForeArm2SquishWristtie.png',
'FrogThigh1SquishKneel.png',
'FrogThigh1SquishKneelClosed.png',
'FrogThigh2SquishKneel.png',
'FrogThigh2SquishKneelClosed.png',
'FrogThigh3SquishKneel.png',
'FrogThigh3SquishKneelClosed.png',
'HarnessSquish.png',
'HeelsClosed.png',
'HeelsErase.png',
'HeelsEraseSpread.png',
'HeelsHogtie.png',
'HeelsKneel.png',
'HeelsKneelClosed.png',
'HeelsRightErase.png',
'HeelsRightEraseClosed.png',
'HeelsSpread.png',
'JacketArmsBoxtie.png',
'JacketArmsCrossed.png',
'JacketArmsWristtie.png',
'JacketBoxtie.png',
'JacketCrossed.png',
'JacketWristtie.png',
'LaceChest.png',
'LeftFrogtieSquishKneel.png',
'LeftFrogtieSquishKneelClosed.png',
'Leg1SquishClosed.png',
'MittsFree.png',
'MittsFront.png',
'MittsCrossed.png',
'MittsYoked.png',
'MittsWristtie.png',
'MittsBoxtie.png',
'Null.png',
'RightFrogtieSquishKneel.png',
'RightFrogtieSquishKneelClosed.png',
'Sarco.png',
'SlimeCorsetErase.png',
'TapeAnklesSquishClosed.png',
'TapeAnklesSquishKneel.png',
'TapeAnklesSquishKneelClosed.png',
'TapeAnklesSquishHogtie.png',
'TapeArmsBoxtie.png',
'TapeFullLeft.png',
'TapeFullLeftBoxtie.png',
'TapeFullLeftCrossed.png',
'TapeFullLeftWristtie.png',
'TapeFullRight.png',
'TapeFullRightBoxtie.png',
'TapeFullRightCrossed.png',
'TapeFullRightWristtie.png',
'TapeHeavyLeft.png',
'TapeHeavyLeftBoxtie.png',
'TapeHeavyLeftCrossed.png',
'TapeHeavyLeftWristtie.png',
'TapeHeavyRight.png',
'TapeHeavyRightBoxtie.png',
'TapeHeavyRightCrossed.png',
'TapeHeavyRightWristtie.png',
'TapeLightLeft.png',
'TapeLightLeftBoxtie.png',
'TapeLightLeftCrossed.png',
'TapeLightLeftWristtie.png',
'TapeLightRight.png',
'TapeLightRightBoxtie.png',
'TapeLightRightCrossed.png',
'TapeLightRightWristtie.png',
'TapeMedLeft.png',
'TapeMedLeftBoxtie.png',
'TapeMedLeftCrossed.png',
'TapeMedLeftWristtie.png',
'TapeMedRight.png',
'TapeMedRightBoxtie.png',
'TapeMedRightCrossed.png',
'TapeMedRightWristtie.png',
'TapeTopLeft.png',
'TapeTopLeftBoxtie.png',
'TapeTopLeftCrossed.png',
'TapeTopLeftWristtie.png',
'EraseCorsetKneel.png',
'EraseCorsetKneelEncase.png',
'EraseCorset.png',
'EraseCorsetEncase.png',
'ReversePrayer.png',
'ButtSleeves.png',
'PetsuitSquish.png',
'LegbinderSquishClosed.png',
'LegbinderSquishHogtie.png',
'LegbinderSquishKneelClosed.png',
'SlimeThighsKneelClosed.png',
'SlimeThighsClosed.png',
'SlimeThighsHogtie.png',
];

// Scale factor for displacement and erase maps
let DisplacementScale = 0.25;

let displacementList = [
	...DisplacementMaps.map((e) => {return "DisplacementMaps/" + e;}),
];

let linearList = [
	"TextureAtlas/atlas0.json",
];

let nearestList = [
	"TextureAtlas/game0.json",
]

let CurrentLoading = "";

let lastProgress = 0;
function incrementProgress(amount) {
	return (progress) => {
		console.log(progress);
		if (progress < lastProgress) lastProgress = 0;
		KDLoadingDone += (progress - lastProgress) * amount;
		lastProgress = progress;
	};
}
async function LoadTextureAtlas(list, scale_mode, preload = false) {
	//PIXI.BaseTexture.defaultOptions.scaleMode = scale_mode;

	for (let dataFile of list) {
		console.log("Found atlas: " + dataFile);
		let amount = 100;
		KDLoadingMax += amount;
	}
	for (let dataFile of list) {
		let amount = 100;
		PIXI.Assets.add({
			alias: dataFile,
			src: dataFile,
		});

		let result = preload ? await PIXI.Assets.backgroundLoad(dataFile).then((value) => {
			CurrentLoading = "Loaded " + dataFile;
			KDLoadingDone += amount;
		}, () => {
			CurrentLoading = "Error Loading " + dataFile;
			KDLoadingDone += amount;
		})
		 : await PIXI.Assets.load(dataFile).then((value: any) => {
			CurrentLoading = "Loaded " + dataFile;
			KDLoadingDone += amount;
			console.log(value);
			/*for (let v of Object.keys(value.textures)) {
				KDTex(v, scale_mode == 'nearest');
			}
			for (let s of Object.values(value.linkedSheets)) {
				// Typescript trickery
				let obj: any = s as any;
				let tex = obj.textures;
				for (let v of Object.keys(tex)) {
					KDTex(v, scale_mode == 'nearest');
				}
			}*/
		 }, () => {
			CurrentLoading = "Error Loading " + dataFile;
			KDLoadingDone += amount;
		});
	}

}

async function PreloadDisplacement(list) {
	for (let dataFile of list) {
		console.log("Found d_map: " + dataFile);
		let amount = 1;
		KDLoadingMax += amount;
	}
	for (let dataFile of list) {
		let amount = 1;

		loadImageAndDraw(dataFile).then((canvasData) => {
			let canvas = canvasData.canvas;
			let source = new PIXI.CanvasSource({
				resource: canvas,
				resolution: DisplacementScale,
				//width: canvas.width,
				//height: canvas.height,
			});
			let tex = PIXI.Texture.from(source);
			CurrentLoading = "Loaded " + dataFile;
			kdpixitex.set(dataFile, tex);

			KDLoadingDone += amount;
		});

		/**
		 *
		tex.source.resize(
			canvasData.origWidth,
			canvasData.origHeight,
			DisplacementScale,
		);
		 */

		/*
		PIXI.Assets.add({
			alias: dataFile,
			src: dataFile,
			resourceOptions: {
				scale: DisplacementScale,
			},
		});
		await PIXI.Assets.load(dataFile)
		.then((value) => {
			//console.log(value)
			CurrentLoading = "Loaded " + dataFile;
			//console.log(dataFile);
			KDLoadingDone += amount;
		}, () => {
			CurrentLoading = "Error Loading " + dataFile;
			console.log(CurrentLoading);
			KDLoadingDone += amount;
		});*/
		/*let result = preload ? PIXI.Assets.backgroundLoad(dataFile) : PIXI.Assets.load(dataFile);

		result.then((value) => {
			console.log(value)
			CurrentLoading = "Loaded " + dataFile;
			//console.log(dataFile);
			KDLoadingDone += amount;
		}, () => {
			CurrentLoading = "Error Loading " + dataFile;
			console.log(CurrentLoading);
			KDLoadingDone += amount;
		});*/
		//let atlas = await result;
	}

}

KDLoadToggles();
if (KDToggles.HighResDisplacement) DisplacementScale = 0.5;

async function load() {

	await LoadTextureAtlas(nearestList, KDToggles.NearestNeighbor ? 'nearest' : 'linear', false);

	await LoadTextureAtlas(linearList, 'linear', false);
	await PreloadDisplacement(displacementList);


	//PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.LINEAR;
	//PIXI.BaseTexture.defaultOptions.anisotropicLevel = 0;

}
load();

(() => {
	let extensions = PIXI.extensions;
	// Alternatively your plugin could be an object, such as with the @pixi/assets parsers
	const modAtlasLoader = {
		extension: {
			type: PIXI.ExtensionType.LoadParser,
			name: 'modAtlasLoader',
		},
		name: 'modAtlasLoader',

		async load<T>(url: string): Promise<T>
		{
			if (KDModFiles[url]) url = KDModFiles[url];
			else {
				url = url.substring(url.indexOf("blob:http:/"));
				url = url.replace("blob:http:/", "blob:http://")
			}

			const response = await PIXI.DOMAdapter.get().fetch(url);

			const json = await response.json();

			//json.meta.image = "TextureAtlas/" + json.meta.image;
			console.log(json)

			return json as T;
		},
	}


	// Make sure to "register" the extension!
	extensions.add(modAtlasLoader);

	const validImageExtensions = ['.jpeg', '.jpg', '.png', '.webp', '.avif'];
	const validImageMIMEs = [
		'image/jpeg',
		'image/png',
		'image/webp',
		'image/avif',
	];

	// Alternatively your plugin could be an object, such as with the @pixi/assets parsers
	const modTextureLoader = {
		extension: {
			type: PIXI.ExtensionType.LoadParser,
			name: 'modTextureLoader',
			priority: PIXI.LoaderParserPriority.High + 3,
		},
		name: 'modTextureLoader',

		config: {
			preferWorkers: true,
			preferCreateImageBitmap: true,
			crossOrigin: 'anonymous',
		},

		test(url: string): boolean
		{
			return KDModFiles[url] && (PIXI.checkDataUrl(url, validImageMIMEs) || PIXI.checkExtension(url, validImageExtensions));
		},

		async load(url: string, asset: any, loader: any): Promise<any>
		{
			if (KDModFiles[url]) url = KDModFiles[url];
			const useImageBitmap = globalThis.createImageBitmap && this.config.preferCreateImageBitmap;
			let src: HTMLImageElement | ImageBitmap;

			if (useImageBitmap)
			{

				src = await PIXI.loadImageBitmap(KDModFilesInv[url]);
			}
			else
			{
				src = await new Promise((resolve, reject) =>
				{
					const src = new Image();

					src.crossOrigin = this.config.crossOrigin;
					src.src = url;
					if (src.complete)
					{
						resolve(src);
					}
					else
					{
						src.onload = () => resolve(src);
						src.onerror = (e) => reject(e);
					}
				});
			}

			const options = { ...asset.data };

			options.resolution ??= PIXI.getResolutionOfUrl(url);
			if (useImageBitmap && options.resourceOptions?.ownsImageBitmap === undefined)
			{
				options.resourceOptions = { ...options.resourceOptions };
				options.resourceOptions.ownsImageBitmap = true;
			}

			const source = new PIXI.ImageSource(options);

			//source.src = url;

			return PIXI.createTexture(source, loader, url);
		},

		unload(texture: PIXITexture): void
		{
			texture.destroy(true);
		}
	}

	// Make sure to "register" the extension!
	extensions.add(modTextureLoader);

	/*const resolveModURL = {
		extension: {
			type: PIXI.ExtensionType.ResolveParser,
			name: 'resolveModURL',
			priority: PIXI.LoaderParserPriority.High,
		},
		test: (url) => KDModFiles[url] != undefined,
		parse: (value: string): PIXIUnresolvedAsset =>
			({
				resolution: '1',
				format: PIXI.path.extname(value).slice(1),
				src: KDModFiles[value],
			}),
	}

	extensions.add(resolveModURL);*/
})();

function loadImageAndDraw(url: string): Promise<{canvas: HTMLCanvasElement, origWidth: number, origHeight: number}> {
	return new Promise((resolve, reject) => {
		const image: HTMLImageElement = new Image();
		image.onload = (): void => {
			createImageBitmap(image).then((imageBitmap: ImageBitmap) => {
				const canvas: HTMLCanvasElement | null = document.createElement('canvas') as HTMLCanvasElement;
				if (canvas) {
					const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
					if (ctx) {
						canvas.width = Math.ceil(imageBitmap.width*DisplacementScale);
						canvas.height = Math.ceil(imageBitmap.height*DisplacementScale);
						ctx.drawImage(imageBitmap, 0, 0, canvas.width, canvas.height);
						resolve({
							canvas: canvas,
							origWidth: imageBitmap.width,
							origHeight: imageBitmap.height,
						}); // Resolve the promise with the canvas
					} else {
						reject(new Error('2D context not available'));
					}
				} else {
					reject(new Error('Canvas element not found'));
				}
			});
		};
		image.onerror = (): void => {
			reject(new Error('Image failed to load'));
		};
		image.src = url;
	});
}