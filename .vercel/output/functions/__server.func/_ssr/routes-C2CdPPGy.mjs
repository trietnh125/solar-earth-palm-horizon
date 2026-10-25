import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C2CdPPGy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CityScene() {
	const host = (0, import_react.useRef)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = host.current;
		if (!el) return;
		let stop = false;
		let dispose = () => {};
		(async () => {
			const THREE = await import("../_libs/three.mjs").then((n) => n.r);
			const { OrbitControls } = await import("../_libs/three.mjs").then((n) => n.n);
			if (stop || !host.current) return;
			const renderer = new THREE.WebGLRenderer({
				antialias: true,
				alpha: true
			});
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			renderer.setSize(el.clientWidth, el.clientHeight);
			renderer.setClearColor(463644, 1);
			el.appendChild(renderer.domElement);
			const scene = new THREE.Scene();
			scene.fog = new THREE.Fog(463644, 18, 48);
			const camera = new THREE.PerspectiveCamera(42, el.clientWidth / el.clientHeight, .1, 80);
			camera.position.set(14, 11, 16);
			const controls = new OrbitControls(camera, renderer.domElement);
			controls.enableDamping = true;
			controls.target.set(0, 1.2, 0);
			controls.maxPolarAngle = Math.PI * .48;
			controls.minDistance = 8;
			controls.maxDistance = 28;
			scene.add(new THREE.AmbientLight(13017435, .35));
			const sun = new THREE.DirectionalLight(16769712, 1.4);
			sun.position.set(8, 16, 6);
			scene.add(sun);
			const fill = new THREE.PointLight(7260415, 8, 30);
			fill.position.set(-4, 6, -2);
			scene.add(fill);
			const rock = new THREE.Mesh(new THREE.CylinderGeometry(22, 26, 8, 48, 1, true), new THREE.MeshStandardMaterial({
				color: 3810328,
				roughness: .95,
				side: THREE.BackSide
			}));
			rock.position.y = 2;
			scene.add(rock);
			const floor = new THREE.Mesh(new THREE.CircleGeometry(18, 48), new THREE.MeshStandardMaterial({
				color: 1713196,
				roughness: .8,
				metalness: .15
			}));
			floor.rotation.x = -Math.PI / 2;
			scene.add(floor);
			const gold = new THREE.MeshStandardMaterial({
				color: 13017435,
				roughness: .35,
				metalness: .4
			});
			const glass = new THREE.MeshStandardMaterial({
				color: 10473704,
				roughness: .15,
				metalness: .6,
				emissive: 1192004,
				emissiveIntensity: .6
			});
			const stone = new THREE.MeshStandardMaterial({
				color: 9270104,
				roughness: .7
			});
			const blocks = [];
			for (let i = 0; i < 42; i++) {
				const angle = i / 42 * Math.PI * 2;
				const radius = 3.2 + i % 5 * 1.15;
				blocks.push({
					x: Math.cos(angle) * radius,
					z: Math.sin(angle) * radius,
					h: 1.2 + i * 7 % 9 * .45,
					w: .55 + i % 3 * .18
				});
			}
			blocks.forEach((b, i) => {
				const mesh = new THREE.Mesh(new THREE.BoxGeometry(b.w, b.h, b.w), i % 4 === 0 ? gold : i % 3 === 0 ? stone : glass);
				mesh.position.set(b.x, b.h / 2, b.z);
				scene.add(mesh);
			});
			const tower = new THREE.Mesh(new THREE.BoxGeometry(1.4, 7.2, 1.4), glass);
			tower.position.set(.4, 3.6, -.2);
			scene.add(tower);
			const crown = new THREE.Mesh(new THREE.CylinderGeometry(.9, 1.1, .35, 16), gold);
			crown.position.set(.4, 7.3, -.2);
			scene.add(crown);
			const tanks = new THREE.Group();
			[-1.1, 1.1].forEach((x) => {
				const tank = new THREE.Mesh(new THREE.CylinderGeometry(.55, .55, 2.2, 20), gold);
				tank.rotation.z = Math.PI / 2;
				tank.position.set(x, 0, 0);
				tanks.add(tank);
			});
			tanks.position.set(-6.5, 5.6, -2);
			scene.add(tanks);
			const ring = new THREE.Mesh(new THREE.TorusGeometry(2.2, .06, 12, 48), new THREE.MeshStandardMaterial({
				color: 15127460,
				emissive: 13017435,
				emissiveIntensity: .8
			}));
			ring.rotation.x = Math.PI / 2;
			ring.position.y = .08;
			scene.add(ring);
			const clock = new THREE.Clock();
			let frame = 0;
			const tick = () => {
				frame = requestAnimationFrame(tick);
				const t = clock.getElapsedTime();
				ring.rotation.z = t * .15;
				tanks.position.y = 5.6 + Math.sin(t * .8) * .05;
				controls.update();
				renderer.render(scene, camera);
			};
			tick();
			setReady(true);
			const onResize = () => {
				if (!host.current) return;
				const w = host.current.clientWidth;
				const h = host.current.clientHeight;
				camera.aspect = w / h;
				camera.updateProjectionMatrix();
				renderer.setSize(w, h);
			};
			window.addEventListener("resize", onResize);
			dispose = () => {
				cancelAnimationFrame(frame);
				window.removeEventListener("resize", onResize);
				controls.dispose();
				renderer.dispose();
				renderer.domElement.remove();
			};
		})();
		return () => {
			stop = true;
			dispose();
		};
	}, []);
	async function downloadCity() {
		const THREE = await import("../_libs/three.mjs").then((n) => n.r);
		const { GLTFExporter } = await import("../_libs/three.mjs").then((n) => n.t);
		const scene = new THREE.Scene();
		const mat = new THREE.MeshStandardMaterial({ color: 13017435 });
		const base = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, .4, 32), new THREE.MeshStandardMaterial({ color: 1713196 }));
		scene.add(base);
		for (let i = 0; i < 24; i++) {
			const h = 1 + i % 6;
			const mesh = new THREE.Mesh(new THREE.BoxGeometry(.7, h, .7), mat);
			const a = i / 24 * Math.PI * 2;
			mesh.position.set(Math.cos(a) * (2 + i % 4), h / 2 + .2, Math.sin(a) * (2 + i % 4));
			scene.add(mesh);
		}
		const result = await new GLTFExporter().parseAsync(scene, { binary: true });
		const blob = new Blob([result], { type: "model/gltf-binary" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "vincave-city.glb";
		a.click();
		URL.revokeObjectURL(url);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-2xl border border-white/10 bg-deep",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: host,
			className: "h-[28rem] w-full"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4 text-sm text-cream/80",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: ready ? "Drag to orbit the cavern city. Scroll to zoom." : "Building the model…" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: downloadCity,
				className: "rounded-full bg-gold px-4 py-2 font-medium text-deep",
				children: "Download vincave-city.glb"
			})]
		})]
	});
}
var NAV = [
	{
		href: "#founders",
		label: "01 Founders"
	},
	{
		href: "#infrastructure",
		label: "02 Energy"
	},
	{
		href: "#systems",
		label: "03 Systems"
	},
	{
		href: "#housing",
		label: "04 Housing"
	},
	{
		href: "#balance",
		label: "05 Balance"
	},
	{
		href: "#invest",
		label: "06 Invest"
	}
];
function VinCavePage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-deep/85 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							className: "font-display text-2xl tracking-wide text-cream",
							children: "VINCAVE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-4 text-xs uppercase tracking-wider text-cream/75 lg:flex",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: "hover:text-gold-soft",
								children: item.label
							}, item.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "shrink-0 rounded-full bg-gold px-4 py-2 text-sm font-medium text-deep",
							children: "Contact us"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative min-h-[100svh] bg-deep text-cream",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/hero.jpg",
								alt: "VinCave industrial city cut into a cliff",
								className: "absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-deep/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.28em] text-gold-soft",
										children: "22-10-2026"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-3 font-display text-7xl leading-none sm:text-9xl",
										children: "VINCAVE"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 max-w-xl font-display text-3xl leading-snug",
										children: "Beyond boundaries. Building tomorrow."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm uppercase tracking-[0.18em] text-cream/70",
										children: "One team. One vision. A new world."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#city",
											className: "rounded-full bg-gold px-5 py-3 text-sm font-medium text-deep",
											children: "Explore the city"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#contact",
											className: "rounded-full border border-cream/30 px-5 py-3 text-sm",
											children: "Contact us for more"
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "bg-ink text-cream",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl items-end gap-8 px-5 py-20 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.22em] text-gold",
								children: "The Lobby"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-6xl",
								children: "The Lobby"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 text-lg font-light leading-relaxed text-cream/85",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Imagine discovering an entire city hidden beneath the Earth." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Welcome to VinCave, where nature meets innovation and extraordinary adventures await. Are you ready to explore a world beyond imagination?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-cream/70",
										children: [
											"Email: VinCaveTheBest@gmail.com",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Website: www.vincavethanks.vn",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Visitor Information: The VinCenter"
										]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/lobby.jpg",
							alt: "Overhead view of The Lobby plaza",
							className: "h-[28rem] w-full object-cover"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "founders",
						className: "mx-auto max-w-6xl px-5 py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.22em] text-gold",
								children: "01 · Letter from the Founders"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-5xl leading-tight md:text-6xl",
								children: "The vision and the crisis"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid gap-6 text-lg font-light leading-relaxed md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "To create a comfortable and thriving city under our feet. Through advanced technologies, innovative infrastructure, and sustainable systems, we aim to ensure VinCave's long-term prosperity, environmental responsibility, and resilience for generations to come." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "With climate change, rising sea levels, and overcrowding becoming major challenges, we believe it's time to explore new places to live. VinCave aims to create a safe underground city using modern technology and sustainable systems, giving people a better place to live today and in the future." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-10 font-display text-3xl",
								children: "Beyond boundaries. Building tomorrow."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm uppercase tracking-[0.18em] text-muted",
								children: "One team — one vision — a new world."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "city",
						className: "bg-deep px-5 py-20 text-cream",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.22em] text-gold",
									children: "3D city file"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-5xl",
									children: "Walk the model."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-2xl text-cream/75",
									children: "A cavern district built from the proposal: cliff shell, civic ring, towers, and the yellow plant on the upper ledge. Orbit it here, or take the GLB."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityScene, {})
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "infrastructure",
						className: "mx-auto max-w-6xl px-5 py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.22em] text-gold",
								children: "02 · Infrastructure and Energy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-6xl",
								children: "Energy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid gap-6 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/solar.jpg",
									alt: "Solar power plant",
									className: "h-full min-h-72 w-full rounded-2xl object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-2xl bg-cream p-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl text-gold",
										children: "Solar Power Plant System"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-4 list-disc space-y-3 pl-5 leading-relaxed",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "To convert sunlight into clean, renewable electricity and feed it directly into the regional power grid." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Equipped with high-efficiency photovoltaic panels, solar tracking mounts, central inverters, and utility-scale battery storage (BESS)." })]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-20 font-display text-6xl",
								children: "Infrastructure"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-sm uppercase tracking-[0.14em] text-muted",
								children: "Built on strong infrastructure, VinCave ensures reliable and efficient living for every resident."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid gap-6 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-2xl bg-navy p-8 text-cream",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl text-gold-soft",
										children: "Municipal Underground Drainage & Water Supply System"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-4 list-disc space-y-3 pl-5 text-cream/85",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "To manage urban flood control by draining wastewater/stormwater while reliably delivering clean drinking water to city households." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Features subterranean smart-monitored pipelines, separate blackwater drainage channels, and anti-leak hydraulic control valves." })]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "overflow-hidden rounded-2xl bg-ink text-cream",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/water.jpg",
										alt: "Underground water works",
										className: "h-52 w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl text-gold-soft",
											children: "Urban Electrical Grid & Power Distribution System"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-cream/80",
											children: "The same subterranean standard: smart-monitored lines, separated service channels, and anti-leak control so power reaches every household without interrupting the city above the rock."
										})]
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "systems",
						className: "bg-ink py-24 text-cream",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.22em] text-gold",
									children: "03 · Smart System"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-6xl",
									children: "Smart System"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 grid gap-5 lg:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: "rounded-2xl bg-navy p-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: "/images/atrium.jpg",
													alt: "Artificial sun atrium",
													className: "mb-5 h-44 w-full rounded-xl object-cover"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-2xl",
													children: "Urban Air Purification System"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
													className: "mt-3 list-disc space-y-2 pl-5 text-sm text-cream/80",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "To filter fine dust, harmful gases, and supply clean, oxygen-rich air to dense urban areas." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Uses multi-stage HEPA/bio-tech filters, smart IoT sensors, and doubles as smart street infrastructure." })]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: "rounded-2xl bg-navy p-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: "/images/water.jpg",
													alt: "Clean water filtration",
													className: "mb-5 h-44 w-full rounded-xl object-cover"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-2xl",
													children: "Urban Clean Water Supply & Filtration System"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
													className: "mt-3 list-disc space-y-2 pl-5 text-sm text-cream/80",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "To treat raw water sources, remove contaminants, and supply safe drinking water to city residents." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Uses multi-stage membrane filtration (UF/RO), real-time IoT quality monitoring, and automated smart distribution networks." })]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: "rounded-2xl bg-navy p-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: "/images/atrium.jpg",
													alt: "Full-spectrum lighting",
													className: "mb-5 h-44 w-full rounded-xl object-cover"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-2xl",
													children: "Artificial Sun & Lighting Distribution System"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
													className: "mt-3 list-disc space-y-2 pl-5 text-sm text-cream/80",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "To provide bright, full-spectrum light that closely mimics natural sunlight in areas with limited sunlight or during nighttime." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Uses energy-efficient plasma or LED lights, automatic reflectors to track the Sun, and smart optical systems to spread light across large areas." })]
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 max-w-3xl text-cream/75",
									children: "Every system is carefully designed to ensure safety, reliability, and a smooth, sustainable life beneath the surface."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-20 font-display text-6xl",
									children: "Emergency Hubs"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid gap-6 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/hubs.jpg",
										alt: "Emergency hospital, station, and water reserve",
										className: "h-full min-h-72 w-full rounded-2xl object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl text-gold-soft",
											children: "Modern General Hospital System"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "mt-2 list-disc space-y-2 pl-5 text-sm text-cream/80",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "To maintain public order, ensure community safety, enforce laws, and respond to local criminal incidents or emergencies." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Features secure holding areas, dispatch communication centers, public reporting reception desks, and round-the-clock patrol fleet parking." })]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl text-gold-soft",
											children: "Emergency Water Reserve & Storage Facility"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-cream/80",
											children: "Reserve volume held inside the rock for the city when surface supply is interrupted."
										})] })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-20 font-display text-6xl",
									children: "Farming"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid gap-6 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-2xl bg-navy p-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl text-gold-soft",
											children: "Automated Crop & Livestock Farming Zone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "mt-3 list-disc space-y-2 pl-5 text-sm text-cream/80",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sustainably cultivate food crops with automated irrigation systems." }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Controlled-environment livestock barns ensuring strict biosecurity." }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Feed storage silos and modern animal waste management systems." })
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-2xl bg-navy p-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl text-gold-soft",
											children: "Supply Chain Mission"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "mt-3 list-disc space-y-2 pl-5 text-sm text-cream/80",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sustainably produce clean food to fully meet the needs of the underground urban supply chain." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ensure a fresh, closed-loop, and eco-friendly food supply for the cave environment every day." })]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/farm.jpg",
									alt: "Automated crop zone",
									className: "mt-6 h-80 w-full rounded-2xl object-cover"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "housing",
						className: "mx-auto max-w-6xl px-5 py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.22em] text-gold",
								children: "04 · Housing and Special Locations"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-6xl",
								children: "Housing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-5 md:grid-cols-3",
								children: [
									["Luxury High-Rise Commercial & Residential Tower", "/images/tower.jpg"],
									["Modern High-Rise Apartment Complex", "/images/transit.jpg"],
									["Affordable Student Dormitory & Rental Complex", "/images/lobby.jpg"]
								].map(([name, src]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "overflow-hidden rounded-2xl bg-cream",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src,
										alt: name,
										className: "h-56 w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "p-5 font-display text-2xl",
										children: name
									})]
								}, name))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "balance",
						className: "bg-cream py-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.22em] text-gold",
									children: "05 · Advantages & Disadvantages"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-6xl",
									children: "Advantages"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid gap-6 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-2xl bg-ink p-8 text-cream",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl text-gold-soft",
											children: "Strong disaster protection"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 leading-relaxed text-cream/80",
											children: "Underground cities are protected from many surface hazards, such as severe storms, tsunamis, heatwaves, and radiation. The surrounding rock also helps maintain stable temperatures throughout the year."
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-2xl bg-white p-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl",
											children: "Surface ecosystem restoration"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-4 list-disc pl-5 leading-relaxed",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Frees up land for forests, farming, and wildlife habitats, reducing urban sprawl and the need for more concrete buildings." })
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-16 font-display text-6xl",
									children: "Disadvantages"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid gap-6 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-2xl border border-line bg-paper p-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl",
											children: "Psychological and physical strain"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-4 list-disc pl-5 leading-relaxed",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Long periods without natural sunlight can cause seasonal depression (SAD), disrupt sleep patterns, and increase feelings of being trapped, making mental health support essential." })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-2xl border border-line bg-paper p-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl",
											children: "High costs"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 leading-relaxed",
											children: "High initial costs for digging deep underground, along with ongoing expenses for running life-support and ventilation systems 24/7."
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 rounded-2xl bg-ink px-6 py-4 font-mono text-xs uppercase tracking-wider text-gold-soft",
									children: "System status: operational. Caution: OPEX energy consumption: 650MW. Required maintenance: weekly. Lifetime CAPEX: $4.5 trillion."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "invest",
						className: "mx-auto max-w-6xl px-5 py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.22em] text-gold",
								children: "06 · Investing in Tomorrow"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-5xl md:text-6xl",
								children: "Why invest in VinCave?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-6 max-w-3xl list-disc space-y-2 pl-5 text-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Advanced Technology:" }), " Smart infrastructure and innovative systems."] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Sustainability:" }), " Efficient resource use and long-term urban resilience."] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Future Potential:" }), " A new vision for future housing and urban development."] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-3xl text-lg font-light leading-relaxed",
								children: "VinCave is more than just an underground city. It's our idea of what future living could look like. With modern technology and reliable infrastructure, we hope to create a city where people can live safely and comfortably for years to come."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-3xl",
								children: "Be part of what's next."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid gap-5 md:grid-cols-3",
								children: [
									[
										"Studio Apartment",
										"35–50 m² · Ideal for individuals",
										"50,000–80,000 $"
									],
									[
										"Family Residence",
										"80–120 m² · Designed for families",
										"120,000–200,000 $"
									],
									[
										"Luxury Underground Villa",
										"150–250 m² · Premium living",
										"300,000–500,000 $"
									]
								].map(([name, meta, price]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-2xl border border-line bg-cream p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl",
											children: name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted",
											children: meta
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-8 text-lg",
											children: price
										})
									]
								}, name))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "contact",
						className: "bg-ink py-24 text-cream",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-6xl",
									children: "The VinCave"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-display text-3xl text-gold",
									children: "Contact us for more!"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-6 leading-relaxed text-cream/80",
									children: [
										"Email: VinCaveTheBest@gmail.com",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Website: www.VinCaveBest4Best.com",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Visitor Information: The VinCenter"
									]
								})
							] }), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-navy p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-4xl",
									children: "Received."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-cream/75",
									children: "Write VinCaveTheBest@gmail.com — this preview does not store the form."
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit,
								className: "grid gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-1 text-sm",
										children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											name: "name",
											className: "rounded-xl bg-paper px-4 py-3 text-ink"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-1 text-sm",
										children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: "email",
											name: "email",
											className: "rounded-xl bg-paper px-4 py-3 text-ink"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-1 text-sm",
										children: ["Note", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											name: "note",
											rows: 4,
											className: "rounded-xl bg-paper px-4 py-3 text-ink"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "rounded-full bg-gold px-5 py-3 font-medium text-deep",
										children: "Contact us for more"
									})
								]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-deep px-5 py-8 text-sm text-cream/70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-2 md:flex-row md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl text-cream",
						children: "VINCAVE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "22-10-2026 · One team. One vision. A new world." })]
				})
			})
		]
	});
}
var SplitComponent = VinCavePage;
//#endregion
export { SplitComponent as component };
